$(document).ready(function(){
	$("#submit").click(function(){
		var numParagraphs = $("#paragraphs").val();

		$("div p").slice(0, numParagraphs).fadeIn("slow");
		$(".ipsum").slideDown("slow");
	});

	$("#paragraphs").focus(function() {
		$("div p").fadeOut("slow");
		$(".ipsum").slideUp("slow");
	})
});