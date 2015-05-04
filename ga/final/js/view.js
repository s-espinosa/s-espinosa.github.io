$(document).ready(function(){


	// mobile nav //
	$("#dropdown").click(function(){
		$("#innerNav").slideToggle("slow");
	});

	$("nav a").click(subtleNav());

	//get json content//
	var currentArticle = "home";
	var posts = [];
	var tags = [];

	$.getJSON("data/posts.json", function(data) {
		posts = data;
		getTags(posts);
	});

	function getAllTags(postArray) {
		$.each(posts, function(index, value) {
			tags.push(value["tag"]);
			console.log(tags);
		});
	}


	function subtleNav () {
		var clicked = $(this).attr("class");

		pickPosts(clicked);

		if (tags.length === 1) {
			makeSinglet();
		} else {
			makeGrid();
		}

		// if ($("main").attr("currentArticle") === currentArticle) {
		// 	return;
		// } else {
		// 	$("main").fadeOut("slow", changeArticle(clicked));
		// 	// closeIpsum();
		// 	// setTimeout(function(){changeIpsum(clicked);}, 500);
		// }
	}

	function pickPosts(tagPassed) {
		//function to select posts based on their tag
		//generate activePosts
	}

	function makeSinglet() {
		//function to make a layout with a single focus
		//run after pickPosts so that activePosts is current
	}

	function makeGrid() {
		//function to make a layout with multiple items
		//run after pickPosts so that activePosts is current
	}



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