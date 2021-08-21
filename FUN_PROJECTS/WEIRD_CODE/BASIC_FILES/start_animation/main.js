

//create an array
let star_arr = []

//set speed at which they move
let speed

function setup(){
    createCanvas(innerWidth,innerHeight)

    /*when star goes outside window
    use the same star from the array
    */

    for(let i=0;i<2000;i++){

        /*create a new star when a star goes out of window*/
        star_arr[i] = new Star()
    }
}


function draw() {

    /*Speed of stars increase as the mouse 
    Xaxis moves towards window width
    
    MAX Speed here is 50 which changes the
    z_axis speed
    0-> when mouse is at starting of window width
    */
    speed = map(mouseX,25,width,0,60)
    background(0)

    /*We want the stars to orginate from the center and not from default location from top right 
    
    So set a translate function to start points from center
    */
   translate(width/2,height/2)

   //apply this for all stars in array
    for(let i=0;i<star_arr.length;i++){

        //update star location on window
        star_arr[i].update_star()

        //show star on window
        star_arr[i].show_star()
    }
} 