imageArray = document.getElementsByClassName("profilePics");

for (i=0; i<imageArray.length; i++) {
	imageArray[i].onclick = function() {
		document.getElementById("main").src = this.src;
	}
}