$(document).ready(function(){



	function pullSingletPageData(pageType, pageLocation, pageToPull) {
		//pageType is either singlet or grid
		//pageToPull will be pulled from the button id. Should be able to use the index of the links/divs/images in the main area

		var JSONLocation = "data/" + pageLocation + ".json";

		$.getJSON(JSONLocation, function(data) {
			var pageData = data[pageToPull];
			pullSingletTemplate(pageData);
		});		
	} 


	function pullSingletTemplate(pageData){
		$.getJSON("data/detailtemplate.json", function(data) {
			createSingletPage(pageData, data);
		});	
	}

	function createSingletPage(pageData, templateData) {
		var HTMLtoInsert = templateData[0] + pageData.image + templateData[1] + pageData.link + templateData[2] + pageData.title + templateData[3] + pageData.assignment + templateData[4];
		$("#mainWrapper").html(HTMLtoInsert);		
	}


	pullSingletPageData("singlet", "webdetail", 2);





























	//ASSIGN CLICKS TO NAV BUTTONS//
	$("#webNav").click(function(){
		makeGridPage("web");
	});

	$("#audioNav").click(function(){
		makeGridPage("audio");
	});

	$("#videoNav").click(function(){
		makeSingletPage("video");
	});	



	// //ACTUAL FUNCTIONS FOR CLICKS//
	// var SingletTemplate = pullJSON("detailtemplate");

	// function makeGridPage(pageToMake) {
	// 	var JSONGridArray = pullJSON(pageToMake);

	// 	//function to make a layout with multiple items
	// 	//run after pickPosts so that activePosts is current
	// }


	// function makeSingletPage(pageType, pageToMake) {
	// 	var JSONLocation = pageType + "detail"
	// 	var JSONSingletArray = pullJSON(JSONLocation);
	// 	var imageSource = "img/detail/" + pageType + "/" + pageType + pageToMake + "detail.gif";
	// 	var detailIndex = (pageToMake * 1) - 1;


	// 	//all of this below just seems to be happening too fast. Try ot make it a callback to the JSON pull itself.//
	// 	//means that you'll need to push all the JSON at once (template and detail)//
	// 	var HTMLtoInsert = SingletTemplate[0] + imageSource + SingletTemplate[1] + JSONSingletArray[detailIndex].link + SingletTemplate[2] + JSONSingletArray[detailIndex].title + SingletTemplate[3] + JSONSingletArray[detailIndex].assignment + SingletTemplate[4];
	// 	$("#mainWrapper").html(HTMLtoInsert);
	// 	//function to make a layout with a single focus
	// 	//run after pickPosts so that activePosts is current
	// }


	// function pullJSON(JSONPage) {
	// 	var JSONLocation = "data/" + JSONPage + ".json";

	// 	$.getJSON(JSONLocation, function(data) {
	// 		console.log(data);
	// 		return data;
	// 	});
	// }



	//FUNCTIONS TO OPEN AND CLOSE WINDOWS (RENAME)//
	function changeArticle(clicked){
		var clickedClass = "." + clicked;
		// function closeArticle(){
		// 	$("main").fadeOut("slow");
		// 	// $(".ipsum").slideUp("slow");
		// }
		


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


	//INITIAL PAGE SETUP USING FUNCTIONS//
	// generateArticle(currentArticle);



	// // MOBILE NAVIGATION //
	// $("#dropdown").click(function(){
	// 	$("#innerNav").slideToggle("slow");
	// });

	// $("nav a").click(subtleNav());


});