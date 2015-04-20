$(document).ready(function() {
	$("#navHead").click(function(){
		$("#innerNav").slideToggle(500);
	})
});

$(window).resize(function() {
	if($(window).width() > 600) {
		$("#innerNav").show();
	} else {
		$("#innerNav").hide();
	}
});