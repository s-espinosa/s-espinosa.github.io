$(document).ready(function(){

	var currentArticle = "home";

	$.getJSON('data/posts.json', function(data) {
		var posts = data;
	}

	$("#dropdown").click(function(){
		$("#innerNav").slideToggle("slow");
	});

	$("nav a").click(function(){
		var clicked = $(this).attr("class");

		if ($("main").attr("currentArticle") === currentArticle) {
			return;
		} else {
			$("main").fadeOut("slow", changeArticle(clicked));
			// closeIpsum();
			// setTimeout(function(){changeIpsum(clicked);}, 500);
		}
	});


	// function closeArticle(){
	// 	$("main").fadeOut("slow");
	// 	// $(".ipsum").slideUp("slow");
	// }


	function changeArticle(clicked){
		var clickedClass = "." + clicked;

		


		// $("#activeLorem").removeAttr("id");
		// $(clickedClass).attr("id", "activeLorem");


	}


	function generateArticle(){
	// 	var numParagraphs = $("#paragraphs").val();

	// 	if (numParagraphs === "") {
	// 		return;
	// 	} else {
	// 		$("div p").slice(0, numParagraphs).fadeIn("slow");
	// 		$(".ipsum").slideDown("slow");
	// 	}
	}


	generateArticle(currentArticle);

});