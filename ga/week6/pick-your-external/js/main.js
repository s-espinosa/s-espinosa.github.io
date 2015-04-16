$(document).ready(function(){
	$("#submit").click(function(){generateIpsum()});
	$("#paragraphs").focus(function(){closeIpsum()});
	$("nav a").click(function(){
		var clicked = $(this).attr("class");

		if ($(".ipsum").css("display") === "none") {
			changeIpsum(clicked);
		} else {
			closeIpsum();
			setTimeout(function(){changeIpsum(clicked);}, 500);
		}
	
	});



	function generateIpsum(){
		var numParagraphs = $("#paragraphs").val();

		if (numParagraphs === "") {
			return;
		} else {
			$("div p").slice(0, numParagraphs).fadeIn("slow");
			$(".ipsum").slideDown("slow");
		}
	}

	function closeIpsum(){
		$("div p").fadeOut("slow");
		$(".ipsum").slideUp("slow");
	}

	function changeIpsum(clicked){
		var clickedClass = "." + clicked

		$("#activeLorem").removeAttr("id");
		$(clickedClass).attr("id", "activeLorem");

		$.getJSON('data/ipsum.json', function(data) {
			$(".ipsum").html(data[clicked]);
			generateIpsum();
		});

	}
});