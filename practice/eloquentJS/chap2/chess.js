var dimensions = 19;
var stringLine = "";
var characterToAdd = " ";


for (var singleLine = 0; singleLine < dimensions; singleLine++) {
	if (singleLine%2 === 0) {
		characterToAdd = " ";
	} else {
		characterToAdd = "#";
	}

	for (var singleCharacter = 0; singleCharacter < dimensions; singleCharacter++) {
		if (characterToAdd === " ") {
			stringLine = stringLine + characterToAdd;
			characterToAdd = "#";
		} else {
			stringLine = stringLine + characterToAdd;
			characterToAdd = " ";			
		}
	}

	stringLine = stringLine + "\n";
}


console.log(stringLine);