$(document).ready(function() {
	$("#navHead").click(function(){
		$("#innerNav").slideToggle(500);
	})
});

$(window).resize(function() {
	if($(window).width() > 550) {
		$("#innerNav").show();
	} else {
		$("#innerNav").hide();
	}
});