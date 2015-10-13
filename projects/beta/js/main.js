$(document).ready(function(){

  // Box constructor function
    function Box(passed_max_height, passed_max_width, passed_distance_from_top) {
        
        this.max_height = passed_max_height;
        this.max_width = passed_max_width;
        this.distance_from_top = passed_distance_from_top;

        this.actual_height = Math.round(Math.random() * this.max_height);
        this.actual_width = Math.round(Math.random() * this.max_width);

        


        // this.animate() = function(callback){

        // }
    };


var box1 = new box(280, 700, 90);
var box2 = new box(280, 700, 90);
var box3 = new box(280, 700, 90);
var box4 = new box(280, 700, 90);

var boxes = [box1, box2, box3, box4];
}

