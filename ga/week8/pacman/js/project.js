$(document).ready(function(){

	setUp();

	//Your code goes here

	var numClicks = 0;
	var ghostNumber = "";
	var decimalMove = 0;
	var percentMove = "";
	var bodyWidth = $("body").width();

	$("body").click(function(){

		if (numClicks < 4) {
			numClicks++;
			ghostNumber = "#ghost" + numClicks;
			decimalMove = (.7 - (.1*numClicks))*bodyWidth;

			console.log($("body").width());

			$(ghostNumber).animate({
				left: decimalMove
			}, 2000);

		} else {
			numClicks = 0

			$("#pacman").animate({
				left: "45%"
			}, 2000).animate({
				left: "110%"
			}, 2000, function(){
				$("#pacman").css("left", "-110px");
			});

			$("#ghost1, #ghost2, #ghost3, #ghost4").animate({
				left: "110%"
			}, 2000, function() {
				$(".ghosts").css("left", "-110px");				
			});


		}



		// $("#ghost1").animate({
		// 	left: "70%"
		// }, 3000);


	});


	$("body").mouseenter(function(){
		$("h1").fadeOut(500);
	});
});

function setUp() {
	$("body, html, #wrapper").height($(window).height());
	$("body, html, #wrapper").width($(window).width());
}

$(window).resize(function() {
	setUp();
});