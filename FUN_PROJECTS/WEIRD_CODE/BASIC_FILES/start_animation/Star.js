
/*Creating a class called Star */
function Star(){

    /*Draw all stars within window area */
    this.x_axis = random(-width,width)
    this.y_axis = random(-height,height)
    this.z_axis = random(width)

    this.prev_z_coord = this.z_axis


    this.update_star = function(){

        this.z_axis = this.z_axis - speed

        /*When the star comes near the user in z-axis remove it */
        if(this.z_axis < 2){

            /*varying the speed at which stars come at you based on width of window
            
            The larger the mouseX value the faster the movement
            */
            this.z_axis = width

            /*Place the stars randomly between the preimeter of window limits */
            this.x_axis = random(-width,width)
            this.y_axis =random(-height,height)

            this.prev_z_coord = this.z_axis
        }
        else{
    
        }
    }

    

    this.show_star = function(){
        fill(255)
        noStroke()

        let Sx = map(this.x_axis/this.z_axis,0,1,0,width)
        let Sy = map(this.y_axis/this.z_axis,0,1,0,height)

        /*As the star comes near user in z-axis increase radius of ellipse to make it look big */
        
        let rad = map(this.z_axis,0,width,10,0)
        //elipse to represent star
        ellipse(Sx,Sy,rad,rad)

        
        let prev_x_coord =
            map(this.x_axis/this.prev_z_coord,0,1,0,width)
        let prev_y_coord =
          map(this.y_axis/this.prev_z_coord,0,1,0,height)

        //we set the z coordinate to a previous coordinate
        this.prev_z_coord = this.z_axis
        stroke(200)
        line(prev_x_coord,prev_y_coord,Sx,Sy)

    };


}