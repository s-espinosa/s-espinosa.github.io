// setup
var onOff = "off";
var frequency = 600/4;
var padsArray = document.getElementsByClassName("pads");
console.log(padsArray.length);

distributeFrequency(frequency);


// check setup
var printFrequency = document.getElementById("pad3").getAttribute("freqBlinkOff");
console.log(printFrequency);


// On and Off buttons
var toClear = 0;

document.getElementById("start").onclick = function() {
	if(onOff == "on") {
		return;
	} else {
		onOff = "on";
		console.log(onOff);
		blinkOn();
		toClear = setInterval(function(){blinkOn();}, frequency*16);
	}
}

document.getElementById("stop").onclick = function() {
	if(onOff == "off") {
		return;
	} else {
		onOff = "off";
		clearInterval(toClear);
	}
}



function blinkOn() {
	if (onOff == "off") {
		return;
	} else {
		for (i=0; i<padsArray.length; i++) {
			howToBlink(padsArray[i],i);
		}

		// setTimeout(function() {document.getElementById("pad1").style.backgroundColor = "#FFFFFF";}, frequency*0);
		// setTimeout(function() {document.getElementById("pad1").style.backgroundColor = "#AAAAAA";}, frequency*1);
		// setTimeout(function() {document.getElementById("pad2").style.backgroundColor = "#FFFFFF";}, frequency*4);
		// setTimeout(function() {document.getElementById("pad2").style.backgroundColor = "#AAAAAA"}, frequency*5);
		// setTimeout(function() {document.getElementById("pad3").style.backgroundColor = "#FFFFFF";}, frequency*8);
		// setTimeout(function() {document.getElementById("pad3").style.backgroundColor = "#AAAAAA"}, frequency*9);
		// setTimeout(function() {document.getElementById("pad4").style.backgroundColor = "#FFFFFF";}, frequency*12);
		// setTimeout(function() {document.getElementById("pad4").style.backgroundColor = "#AAAAAA"}, frequency*13);
	}
}


// set pad attributes for how frequently to blink
function distributeFrequency (freq) {
	for (i=0; i < padsArray.length; i++) {
		padsArray[i].setAttribute("freqBlinkOn", i*4);
		padsArray[i].setAttribute("freqBlinkOff", (i*4)+1);
	}
}


// set delays for blinking behavior on each pad (repeating from the beginning is handled by setInterval in original call from onclick)
function howToBlink(padElement, count) {
		setTimeout(function() {padElement.style.backgroundColor = "#FFFFFF";}, frequency*(count*4));
		setTimeout(function() {padElement.style.backgroundColor = "#AAAAAA";}, frequency*((count*4)+1));
}