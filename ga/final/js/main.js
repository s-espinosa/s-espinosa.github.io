//**INITIAL SETUP**//

// setup
var onOff = "off";
var toClearOnOff = 0;
var padsArray = document.getElementsByClassName("pads");

// pad colors
var padBackOff = "A4A6A5";
var padBackOffBlink = "CFD2D1";
var padBackOn = "67A7CE";
var padBackOnBlink = "#7FC8F6";

// instrument pattern arrays
var kickPattern = [];
var snarePattern = [];
var highPattern = [];
var highOpenPattern = [];

// initial beat per minute values
var bpm = 100; //100 beats per minute hard coded for now
var mspbeat = (60*1000)/bpm; //600 milliseconds for each beat
var msp16th = mspbeat/4; //150 milliseconds for each sixteenth note => each pad for 32 pads assuming 2 measures.
// var frequency = 600/(padsArray.length/2);

// add attributes and onclick behavior to pads
setPads();




// Set On button functions
document.getElementById("start").onclick = function() {
	if(onOff == "on") {
		return;
	} else {
		onOff = "on";
		blinkOn();
		toClearOnOff = setInterval(function(){blinkOn();}, msp16th*padsArray.length);
	}
}


// blinking function for pads
function blinkOn() {
	if (onOff == "off") {
		return;
	} else {
		for (i=0; i<padsArray.length; i++) {
			howToBlink(padsArray[i],i);
			howToPlay(i);
		}
	}
}

// set delays for blinking behavior on each pad (repeating from the beginning is handled by setInterval in original call from onclick)
function howToBlink(padElement, count) {
	if (kickPattern[padElement.getAttribute("padNumber")] === 0) {
		setTimeout(function() {padElement.style.backgroundColor = padBackOffBlink;}, msp16th*(count));
		setTimeout(function() {padElement.style.backgroundColor = padBackOff;}, msp16th*(count+1));
	} else {
		setTimeout(function() {padElement.style.backgroundColor = padBackOnBlink;}, msp16th*(count));
		setTimeout(function() {padElement.style.backgroundColor = padBackOn;}, msp16th*(count+1));		
	}
}


// Set On button functions
document.getElementById("stop").onclick = function() {
	if(onOff == "off") {
		return;
	} else {
		onOff = "off";
		clearInterval(toClearOnOff);
	}
}




function howToPlay(count) {
	if (kickPattern[count] == 0) {
		return;
	} else {
		setTimeout(function() {
			var snd = new Audio("audio/kick.wav");
			snd.play();
		}, msp16th*(count));
	}
}





// set pads with onclick behavior
// function setPads() {
// 	for (i=0; i < padsArray.length; i++) {
// 		padsArray[i].setAttribute("padOn") = "off";
// 		padsArray[i].onclick = togglePad();
// 	}
// }

function setPads() {
	for (i=0; i < padsArray.length; i++) {
		padsArray[i].setAttribute("padNumber", i);
		kickPattern.push(0);
		padsArray[i].onclick = function() {
			var padNumber = this.getAttribute("padNumber");
			if (kickPattern[padNumber] == 0) {
				kickPattern[padNumber] = 1;
				this.style.backgroundColor = padBackOn;
			} else {
				kickPattern[padNumber] = 0;
				this.style.backgroundColor = padBackOff;		
			}
		}	
	}
}





// testing stuff

// console.log(padsArray.length);

// distributeFrequency(msp16th);
// // set pad attributes for how frequently to blink
// function distributeFrequency (freq) {
// 	for (i=0; i < padsArray.length; i++) {
// 		padsArray[i].setAttribute("freqBlinkOn", i*4);
// 		padsArray[i].setAttribute("freqBlinkOff", (i*4)+1);
// 	}
// }





// // check setup
// var printFrequency = document.getElementById("pad3").getAttribute("freqBlinkOff");
// console.log(printFrequency);


