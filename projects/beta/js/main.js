$(document).ready(function(){

  // Box constructor function
    function Box(passed_max_height, passed_max_width, passed_distance_from_top) {
        
        this.distance_from_top = passed_distance_from_top;

        this.actual_height = Math.round(Math.random() * passed_max_height);
        this.actual_width = Math.round(Math.random() * passed_max_width);

        this.max_additional_x_shift = this.max_height - this.actual_height;
        this.max_y_shift = this.max_width - this.actual_width;




        // this.animate() = function(callback){

        // }
    };


    Box.prototype = {
        constructor Box;

        placeBox:function(){

        }

        // animateBox:function(callback){

        // }
    }


    box1 = new Box(280, 700, 90);
    box2 = new Box(280, 700, 90);
    box3 = new Box(280, 700, 90);
    box4 = new Box(280, 700, 90);

    var boxes = [box1, box2, box3, box4];

    //place each of the boxes on the site.
    for (i=0, i<boxes.length, i++) {
        boxes[i].placeBox();
    }

}

