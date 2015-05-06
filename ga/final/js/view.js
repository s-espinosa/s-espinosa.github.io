$(document).ready(function(){



	//ASSIGN CLICKS TO NAV BUTTONS//
	$("#webNav").click(function(){
		$("#mainWrapper").fadeOut("slow", function() {
			pullGridPageData("webgrid")
		});
	});

	$("#audioNav").click(function(){
		$("#mainWrapper").fadeOut("slow", function() {
			pullGridPageData("audiogrid")
		});
	});

	$("#videoNav").click(function(){
		makeSingletPage("video");
	});	




	//CREATE SINGLET PAGES: Pages showing the detail of a single project.//
	function pullSingletPageData(pageLocation, pageToPull) {
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
		var HTMLtoInsert = templateData[0] + pageData.image + templateData[1] + pageData.link + templateData[2] + pageData.title + templateData[3] + pageData.text + templateData[4];
		$("#mainWrapper").html(HTMLtoInsert);
		$("#mainWrapper").fadeIn("slow");
	}

	//SINGLET TEST//
	// pullSingletPageData("audiodetail", 3);






	//CREATE GRID PAGES: Pages showing the a grid of a lot of projects.//
	function pullGridPageData(pageLocation) {
		//For now page location is either webgrid or audiogrid
		//pageToPull will be pulled from the button id. Should be able to use the index of the links/divs/images in the main area
		var JSONLocation = "data/" + pageLocation + ".json";

		$.getJSON(JSONLocation, function(data) {
			var pageData = data;
			pullGridTemplate(pageData, pageLocation);
		});		
	} 

	function pullGridTemplate(pageData, pageLocation){
		$.getJSON("data/gridtemplate.json", function(data) {
			createGridPage(pageData, data, pageLocation);
		});	
	}

	function createGridPage(pageData, templateData, pageLocation) {
		var HTMLtoInsert = "";

		for (var i = 0; i < pageData.length; i++) {
			if (i % 3 === 0) {
				HTMLtoInsert = HTMLtoInsert + "<div class=\"row\">" + templateData[0] + pageData[i].image + templateData[1] + pageData[i].rollover + templateData[2] + pageData[i].image + templateData[3];
			} else if ((i+1) % 3 === 0) {
				HTMLtoInsert = HTMLtoInsert + templateData[0] + pageData[i].image + templateData[1] + pageData[i].rollover + templateData[2] + pageData[i].image + templateData[3] + "</div>";
			} else {
				HTMLtoInsert = HTMLtoInsert + templateData[0] + pageData[i].image + templateData[1] + pageData[i].rollover + templateData[2] + pageData[i].image + templateData[3];
			}
		}

		$("#mainWrapper").html(HTMLtoInsert);
		assignButtonLinks(pageLocation);
		$("#mainWrapper").fadeIn("slow");
	}

	function assignButtonLinks(pageLocation) {
		console.log($(".gridLink")[1]);
		pageLocation = pageLocation.slice(0,-4);
		pageLocation = pageLocation + "detail";	

			// var gridIndex = 0;

		// for (var j=0; j < $(".gridLink").length; j++) {
		// 	$(".gridLink")[j].click(function() {
		// 		console.log(j + " " + pageLocation);				
		// 		pullSingletPageData(pageLocation, j);
		// 	});
		// }

		$(".gridLink").click(function(){
				var gridIndex = $(this).index();
				console.log($(this).index());

			$("#mainWrapper").fadeOut("slow", function() {

				pullSingletPageData(pageLocation, gridIndex);
			});

			// console.log($(this));

		});

	// pullSingletPageData("audiodetail", 3);
	}

	//GRID TEST//
	pullGridPageData("webgrid");









	// // MOBILE NAVIGATION //
	// $("#dropdown").click(function(){
	// 	$("#innerNav").slideToggle("slow");
	// });

	// $("nav a").click(subtleNav());


});