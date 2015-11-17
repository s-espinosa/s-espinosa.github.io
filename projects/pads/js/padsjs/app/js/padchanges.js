	// creates variables to access window[] attributes so that it can 
	// set global variables to the values associated with the sound pad that called this function
	// (which sound is on, which pattern is on, what colors are associated with that sound)
	// clears all the pads from the previous sound and sets them up using the new colors and active sound pattern
	function changePads(newPad) {
		var newPadOn = newPad + "On";
		var newPadOnBlink = newPadOn + "Blink";
		var patternToActivate = newPad + "Pattern";


		activeSound = newPad;
		console.log(patternToActivate);
		activeSoundPattern = parent[patternToActivate];
		console.log(activeSoundPattern);
		padBackOn = parent[newPadOn];
		padBackOnBlink = parent[newPadOnBlink];
		console.log(padBackOnBlink);


		for (i=0; i<padsArray.length; i++) {
			if (activeSoundPattern[i] === 0) {
				padsArray[i].style.backgroundColor = padBackOff;
			} else {
				padsArray[i].style.backgroundColor = padBackOn;
			}

		}
	}