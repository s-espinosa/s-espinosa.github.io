// temperature scipts

document.getElementById("fahrSubmit").onclick = fahrConvert;
document.getElementById("celSubmit").onclick = celConvert;

function fahrConvert() {
	var farTemp = document.getElementById("fahrenheit").value;
	var celTemp = ((farTemp-32)/ 1.8).toFixed(2);
	var message = "That is "+celTemp+" degrees Celsius";
	document.getElementById("fahrResult").innerHTML = message;
}

function celConvert() {
	var celTemp = document.getElementById("celsius").value;
	var fahrTemp = (celTemp*1.8 + 32).toFixed(2);
	var message = "That is "+fahrTemp+" degrees Fahrenheit";
	document.getElementById("celResult").innerHTML = message;
}


// color scripts
$( "#redSlider" ).slider({
	orientation: "vertical",
	value: 100,
	range: "min",
	change: function( event, ui ) {
		colorChange()
	}
});

$( "#greenSlider" ).slider({
	orientation: "vertical",
	value: 100,
	range: "min",
	change: function( event, ui ) {
		colorChange()
	}
});

$( "#blueSlider" ).slider({
	orientation: "vertical",
	value: 100,
	range: "min",
	change: function( event, ui ) {
		colorChange()
	}
});



function colorChange() {
	var redPercent = $("#redSlider").slider("value");
	var greenPercent = $("#greenSlider").slider("value");
	var bluePercent = $("#blueSlider").slider("value");

	// change the percentages to rgb values 0 - 255
	byteRed = byteConvert(redPercent);
	byteGreen = byteConvert(greenPercent);
	byteBlue = byteConvert(bluePercent);

	// create rgb value for backgroundColor
	rgbColor = "rgb("+byteRed+","+byteGreen+","+byteBlue+")"

	// change backgroundColor
	document.getElementById("colorPrompt").style.backgroundColor = rgbColor;

	// update numbers displayed for 0-255 rgb values
	document.getElementById("redOutput").innerHTML = byteRed;
	document.getElementById("greenOutput").innerHTML = byteGreen;
	document.getElementById("blueOutput").innerHTML = byteBlue;

	// change text color if background too dark
	// this could be updated to give better values for 0, 0, 255 background (100% blue)
	// var byteRedText = 255 - byteRed;
	// var byteGreenText = 255 - byteGreen;
	// var byteBlueText = 255 - byteBlue;


	// var rgbText = "rgb("+byteRedText+","+byteGreenText+","+byteBlueText+")";

	// changeText(rgbText);

	if (redPercent<=50 && greenPercent<=50 && bluePercent<=50) {
		changeText("white");
	} else if (redPercent>=50 || greenPercent>=50 || bluePercent>=50) {
		changeText("black");
	}
}

// generic change percentages to byte values
function byteConvert(percent) {
	if (percent>100) {
		percent = 100;
	} else if (percent < 0) {
		percent = 0;
	}
	var byteNumber = (percent/100*255).toFixed(0);
	return byteNumber;
}

// generic change text color
function changeText(textColor) {
	var textToChange = document.getElementsByClassName("colorText");
	for (i=0; i<textToChange.length; i++) {
		textToChange[i].style.color = textColor;			
	}
}