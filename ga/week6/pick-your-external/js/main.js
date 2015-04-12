$(document).ready(function(){
	function AJAX_JSON_Req( url ) {
	    var AJAX_req = new XMLHttpRequest();
	    AJAX_req.open( "GET", url, true );
	    AJAX_req.setRequestHeader("Content-type", "application/json");
	 
	    AJAX_req.onreadystatechange = function()
	    {
	        if( AJAX_req.readyState == 4 && AJAX_req.status == 200 )
	        {
	            var response = JSON.parse( AJAX_req.responseText );
	            document.write( response.name );
	        }
	    }
	    AJAX_req.send();
	}

	var ipsum = AJAX_JSON_Req( 'data/ipsum.json' );

	$("#submit").click(function(){generateIpsum()});
	$("#paragraphs").focus(function(){closeIpsum()});
	$("nav a").click(function(){
		var clicked = $(this).attr("class");

		if ($(".ipsum").css("display") === "none") {
			changeIpsum(clicked);
			generateIpsum();
		} else {
			closeIpsum();
			setTimeout(function(){
				changeIpsum(clicked);
				generateIpsum();
			}, 500)
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

		$("#activeLorem").attr("id", "");
		$(clickedClass).attr("id", "activeLorem");

		$(".ipsum").html(ipsum[clicked]);
	}
});