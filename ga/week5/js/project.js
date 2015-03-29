document.getElementById("a10").onmouseover = addSubtract(10);
document.getElementById("a20").onmouseenter = addSubtract(20);
document.getElementById("a30").onmouseenter = addSubtract(30);

// document.getElementById("").onmouseenter = colorChange(red);
// document.getElementById("").onmouseenter = colorChange(blue);

document.getElementById("n10").onmouseenter = addSubtract(-10);
document.getElementById("n20").onmouseenter = addSubtract(-20);
// document.getElementById("n30").onmouseenter = addSubtract(-30);

function addSubtract(toAdd) {
	currentVal = parseInt(document.getElementById("out").innerHTML);
	newVal = currentVal + toAdd;
	document.getElementById("out").innerHTML = newVal;
}