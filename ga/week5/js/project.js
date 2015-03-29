document.getElementById("a10").onmouseover = function(){addSubtract(10)};
document.getElementById("a20").onmouseenter = function(){addSubtract(20)};
document.getElementById("a30").onmouseenter = function(){addSubtract(30)};

document.getElementById("red").onmouseenter = function(){changeColor("red")};
document.getElementById("out").onmouseenter = function(){changeColor("white")};
document.getElementById("blue").onmouseenter = function(){changeColor("blue")};

document.getElementById("n10").onmouseenter = function(){addSubtract(-10)};
document.getElementById("n20").onmouseenter = function(){addSubtract(-20)};
document.getElementById("n30").onmouseenter = function(){addSubtract(-30)};

function addSubtract(numToAdd) {
	currentVal = parseInt(document.getElementById("out").innerHTML);
	newVal = currentVal + numToAdd;
	document.getElementById("out").innerHTML = newVal;
}

function changeColor(newColor) {
	document.getElementById("out").style.backgroundColor = newColor;
}