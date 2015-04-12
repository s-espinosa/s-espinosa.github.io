$(document).ready(function(){
	$("#submit").click(function(){generateIpsum()});
	$("#paragraphs").focus(function(){closeIpsum()});
	$("nav a").click(function(){
		var clicked = $(this).attr("class");

		if ($(".ipsum").css("display") === "none") {
			console.log("recognizes none")
			changeIpsum(clicked);
			generateIpsum();
		} else {
			closeIpsum();
			setTimeout(function(){changeIpsum(clicked);}, 1);
			setTimeout(function(){generateIpsum();}, 600);
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

		AJAX_JSON_Req('data/ipsum.json', clicked);
	}

	function AJAX_JSON_Req(url, clickedRequest) {
	    var AJAX_req = new XMLHttpRequest();
	    AJAX_req.open( "GET", url, true );
	    AJAX_req.setRequestHeader("Content-type", "application/json");
	 
	    AJAX_req.onreadystatechange = function()
	    {
	        if( AJAX_req.readyState == 4 && AJAX_req.status == 200 )
	        {
	        	console.log(clickedRequest);
	            var response = JSON.parse( AJAX_req.responseText );
				$(".ipsum").html(response[clickedRequest]);
	        }
	    }
	    AJAX_req.send();
	}
});