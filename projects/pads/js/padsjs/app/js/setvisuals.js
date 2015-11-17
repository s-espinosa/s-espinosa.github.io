define(function() {

	//LOAD CSS//
	var cssId = 'padsCss';
	if (!document.getElementById(cssId))
	{
	    var head  = document.getElementsByTagName('head')[0];
	    var link  = document.createElement('link');
	    link.id   = cssId;
	    link.rel  = 'stylesheet';
	    link.type = 'text/css';
	    link.href = 'js/padsjs/app/css/pads.css';
	    link.media = 'all';
	    head.appendChild(link);
	}



	//CREATE INTERFACE//
	var padsBox = $("#padswrapper")[0];

	//Create Controls//
	//create controls area//
	var controlsBox = document.createElement('div');
	controlsBox.id = "controls";
	controlsBox.className = "clearfix";
	padsBox.appendChild(controlsBox);
	controlsBox = $("#controls")[0];


	//add start button//
	var newPad = document.createElement('div');
	newPad.id = "start"
	controlsBox.appendChild(newPad);

	//add stop button//
	var newPad = document.createElement('div');
	newPad.id = "stop"
	controlsBox.appendChild(newPad);


	//Create Pads//
	var padCounter = 1;
	var padAreaCounter = 1;

	for (var i=0; i<4; i++){
		var newPadArea = document.createElement('div');
		newPadArea.id = "padArea" + String(padAreaCounter);
		newPadArea.className = "clearfix";
		padsBox.appendChild(newPadArea);
		padAreaCounter++;

		var currentPadID = "#" + newPadArea.id;

		var currentPadArea = $(currentPadID)[0];

		for (var n=0; n<8; n++){
			newPad = document.createElement('div');
			newPad.className = "pad";
			newPad.id = "pad" + String(padCounter);
			currentPadArea.appendChild(newPad);
			padCounter++;
		}
	}

	//Create Sound Pads//
	//create sounds area//
	var soundsBox = document.createElement('div');
	soundsBox.id = "sounds";
	soundsBox.className = "clearfix";
	padsBox.appendChild(soundsBox);
	soundsBox = $("#sounds")[0];

	//add kick button//
	var newPad = document.createElement('div');
	newPad.id = "kick"
	newPad.className = "sounds"
	soundsBox.appendChild(newPad);

	//add snare button//
	var newPad = document.createElement('div');
	newPad.id = "snare"
	newPad.className = "sounds"
	soundsBox.appendChild(newPad);	

	//add closed hat button//
	var newPad = document.createElement('div');
	newPad.id = "hatClosed"
	newPad.className = "sounds"
	soundsBox.appendChild(newPad);

	//add open hat button//
	var newPad = document.createElement('div');
	newPad.id = "hatOpen"
	newPad.className = "sounds"
	soundsBox.appendChild(newPad);

});