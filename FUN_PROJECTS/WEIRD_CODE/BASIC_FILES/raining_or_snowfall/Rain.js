

const Rain = function(){

    /*Giving every rain drop a random location to start */
    this.x_axis = random(width)
    this.y_axis = random(-width,width)

    //setting how close the drops are
    this.z_axis = random(0,10)

    //sestting rain drop length
    //And the rain drop is longer if closer and shorter of further away accoring to z-index
    this.rain_drop_len = map(this.z_axis,0,20,10,20)

    //setting rate at which y axis increases
    //Closer rain drops are faster
    this.rain_speed = map(this.z_axis,0,20,2,20)


    //function for rain to fall
    this.raining = function(){

        //add some speed to the yaxis while falling
        this.y_axis = this.y_axis + this.rain_speed

        //adding some resistance to rain drop like gravity

        let gravity_res = map(this.z_axis,0,20,0,0.1)

        //adding differnt resistance to drops
        this.rain_speed = this.rain_speed + gravity_res


        /*Once the rain drops fall and go out of the screen.
        
        Make them start again from somewhere on the top of the window

        So its like a continous flow of rain drops
        */

        if(this.y_axis > height){
            //resetting the rain speed to what it was initially
            //setting a y axis position to start
            this.y_axis = random(-700,-200)
            this.rain_speed = map(this.z_axis,0,20,1,20)
        }

    }


    //show function to see it in action

    this.show = function(){

        //setting thickness to rain drop

        //setting 3 px wide when close raindrop
        //setting 1px when far away
        let thick = map(this.z_axis,0,20,1,3)
        stroke(255)
        strokeWeight(thick)
        //drawing a line of required thickeness
        line(this.x_axis,this.y_axis,this.x_axis,this.y_axis+this.rain_drop_len)
    }
}