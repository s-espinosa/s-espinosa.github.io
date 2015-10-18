$(document).ready(function(){

  // Box constructor function
    function Box(passed_max_height, passed_max_width, passed_distance_from_top, number_id) {
        
        this.passed_max_height = passed_max_height;
        this.passed_max_width = passed_max_width;
        this.passed_distance_from_top = passed_distance_from_top;
        this.named_id = "box" + String(number_id);
    }


    Box.prototype = {
        constructor: Box,

        generateDimensions: function(){

            this.actual_height = this.passed_max_height - 0.8 * (Math.round(Math.random() * this.passed_max_height));
            this.actual_width = this.passed_max_width - 0.7 * (Math.round(Math.random() * this.passed_max_width));

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
    };


    var boxes = [];


    //Make 10 boxes and put them in the boxes array.
    for (i=0; i<10; i++) {
        var temp_box = new Box (280, 700, 90, i);
        boxes.push(temp_box);
    }    




    //Place each of the boxes on the site.
    for (i=0; i<boxes.length; i++) {
        boxes[i].generateDimensions();
        boxes[i].placeBox();
    }



    //Function to animate the boxes. Feeding this function as a callback parameter makes them animate continuously.
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
