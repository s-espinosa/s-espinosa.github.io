var dimensions = 20;
var dimensionsPlus = dimensions + 1;
// var dimensionsSquared = dimensions * dimensions;

var stringLine = "";
var characterToAdd = " ";

if (dimensions%2 === 0) {
	for (var i=0; i<dimensions*dimensions; i++) {
		if (i%dimensions === 0) {
			stringLine = stringLine + characterToAdd + "\n";
		} else if (characterToAdd === "#") {
			stringLine = stringLine + "#";
			characterToAdd = " ";
		} else {
			stringLine = stringLine + " ";
			characterToAdd = "#";
		}			
	}
} else {
	for (var i=0; i<dimensions*dimensionsPlus; i++) {
		if (i%dimensionsPlus === 0) {
			stringLine = stringLine + "\n";
		} else if (characterToAdd === "#") {
			stringLine = stringLine + "#";
			characterToAdd = " ";			
		} else {
			stringLine = stringLine + " ";
			characterToAdd = "#";
		}			
	}	
}

console.log(stringLine);