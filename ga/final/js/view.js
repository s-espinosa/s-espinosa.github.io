$(document).ready(function(){

	var currentArticle = "home";
	var posts = {};
	var tags = {}

	$.getJSON('data/posts.json', function(data) {
		posts = data;
		console.log("did this")
	});

	$.each(posts, function(index, value) {
		tags.push(value["tag"]);
		console.log(tags);
		console.log("I'm here");
	});

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