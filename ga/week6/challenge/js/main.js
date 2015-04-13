$(document).ready(function(){
	$("nav a").click(function(){
		var thisButton = $(this).attr("class");
		console.log(thisButton);
		console.log("I was clicked")

		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$("#drop-down").slideUp();			
		} else {
			$(".active").removeClass("active");
			$(this).addClass("active");
			$("#drop-down").slideDown();
		}
	})
});