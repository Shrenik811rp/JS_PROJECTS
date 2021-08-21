

//create an array that contains all rain drop
let rain_drops = []

function setup(){
    createCanvas(innerWidth,innerHeight)

    for(let i =0;i<1000;i++){
        rain_drops[i] = new Rain()
    }

}



function draw(){
    background(0)

/*Display every single rain drop falling from top (raining) */
    for(let i=0;i<rain_drops.length;i++){
        rain_drops[i].raining()
        rain_drops[i].show()
    }

}