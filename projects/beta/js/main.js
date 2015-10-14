$(document).ready(function(){

  // Box constructor function
    function Box(passed_max_height, passed_max_width, passed_distance_from_top, number_id) {
        
        this.passed_max_height = passed_max_height;
        this.passed_max_width = passed_max_width;
        this.passed_distance_from_top = passed_distance_from_top;
        this.named_id = "box" + String(number_id);
    };


    Box.prototype = {
        constructor: Box,

        generateDimensions: function(){

            this.actual_height = Math.round(Math.random() * this.passed_max_height);
            this.actual_width = Math.round(Math.random() * this.passed_max_width);

            this.max_additional_y_shift = Math.round(Math.random()*(this.passed_max_height - this.actual_height));
            this.max_y_shift = this.passed_distance_from_top + this.max_additional_y_shift;
            this.max_x_shift = (-1*this.passed_max_width/2) + Math.round(Math.random()*(this.passed_max_width - this.actual_width));
        },

        counter:function(){

        },

        placeBox:function(){
            $("<div>", {
                "class": "box",
                "id": this.named_id,
                css: {
                    "z-index": -1,
                    "position": "absolute",
                    "left": "50%",
                    "height": String(this.actual_height) + "px",
                    "width": String(this.actual_width) + "px",
                    "margin-left": String(this.max_x_shift) + "px",
                    "top": String(this.max_y_shift) + "px"
                }
            }).appendTo("#boxes");
        }
    }


    var box1 = new Box(280, 700, 90, 1);
    var box2 = new Box(280, 700, 90, 2);
    var box3 = new Box(280, 700, 90, 3);
    var box4 = new Box(280, 700, 90, 4);
    var box5 = new Box(280, 700, 90, 5);
    var box6 = new Box(280, 700, 90, 6);
    var box7 = new Box(280, 700, 90, 7);
    var box8 = new Box(280, 700, 90, 8);
    var box9 = new Box(280, 700, 90, 9);
    var box10 = new Box(280, 700, 90, 10);

    var boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9, box10];

    //place each of the boxes on the site.
    for (i=0; i<boxes.length; i++) {
        boxes[i].generateDimensions();
        boxes[i].placeBox();
    }


    function animateBoxes(callback) {
        for (i=0; i<boxes.length; i++) {
            boxes[i].generateDimensions();
            var box_name = "#" + boxes[i].named_id;
            $(box_name).animate({
                "height": String(boxes[i].actual_height) + "px",
                "width": String(boxes[i].actual_width) + "px",
                "margin-left": String(boxes[i].max_x_shift) + "px",
                "top": String(boxes[i].max_y_shift) + "px"
            }, 4000, "linear", function() {
                callback(animateBoxes);
            });
        }

    }

    animateBoxes(animateBoxes);

});
