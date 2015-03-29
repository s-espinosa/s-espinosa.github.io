document.getElementById("a10").onmouseover = add10;
document.getElementById("a20").onmouseenter = add20;
document.getElementById("a30").onmouseenter = add30;

document.getElementById("red").onmouseenter = changeRed;
document.getElementById("out").onmouseenter = changeBlank;
document.getElementById("blue").onmouseenter = changeBlue;

document.getElementById("n10").onmouseenter = subtract10;
document.getElementById("n20").onmouseenter = subtract20;
document.getElementById("n30").onmouseenter = subtract30;

function add10() {
	currentVal = parseInt(document.getElementById("out").innerHTML);
	newVal = currentVal + 10;
	document.getElementById("out").innerHTML = newVal;
}

function add20() {
	currentVal = parseInt(document.getElementById("out").innerHTML);
	newVal = currentVal + 20;
	document.getElementById("out").innerHTML = newVal;
}

function add30() {
	currentVal = parseInt(document.getElementById("out").innerHTML);
	newVal = currentVal + 30;
	document.getElementById("out").innerHTML = newVal;
}

function subtract10() {
	currentVal = parseInt(document.getElementById("out").innerHTML);
	newVal = currentVal - 10;
	document.getElementById("out").innerHTML = newVal;	
}

function subtract20() {
	currentVal = parseInt(document.getElementById("out").innerHTML);
	newVal = currentVal - 20;
	document.getElementById("out").innerHTML = newVal;	
}

function subtract30() {
	currentVal = parseInt(document.getElementById("out").innerHTML);
	newVal = currentVal - 30;
	document.getElementById("out").innerHTML = newVal;	
}

function changeRed() {
	document.getElementById("out").style.backgroundColor = "red";
}

function changeBlank() {
	document.getElementById("out").style.backgroundColor = "white";
}

function changeBlue() {
	document.getElementById("out").style.backgroundColor = "blue";
}