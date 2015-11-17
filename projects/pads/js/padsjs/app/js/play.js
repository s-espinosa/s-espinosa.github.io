//Will need to use part of this to set the different initial pattern values.
//Refactor so that you create the empty array once and assign it to all the sounds. 

	// function setPads() {
	// 	for (i=0; i < padsArray.length; i++) {
	// 		padsArray[i].setAttribute("padNumber", i);
	// 		kickPattern.push(0);
	// 		snarePattern.push(0);
	// 		hatClosedPattern.push(0);
	// 		hatOpenPattern.push(0);
	// 		padsArray[i].onclick = function() {
	// 			var padNumber = this.getAttribute("padNumber");
	// 			if (activeSoundPattern[padNumber] === 0) {
	// 				activeSoundPattern[padNumber] = 1;
	// 				this.style.backgroundColor = padBackOn;
	// 			} else {
	// 				activeSoundPattern[padNumber] = 0;
	// 				this.style.backgroundColor = padBackOff;		
	// 			}
	// 		}	
	// 	}
	// }




	// blinking function for pads
	// calls each of the functions that should occur when a pad blinks on
	// increments the current beat (16th) after each time called
	function blinkOn() {
		if (onOff === "off") {
			return;
		} else {
			howToBlink(padsArray[currentBeat],currentBeat);
			howToPlay(currentBeat, kickPattern, "kick");
			howToPlay(currentBeat, snarePattern, "snare");
			howToPlay(currentBeat, hatClosedPattern, "hatClosed");
			howToPlay(currentBeat, hatOpenPattern, "hatOpen");

			if (currentBeat === padsArray.length-1){
				currentBeat = 0;
			} else  {
				currentBeat++;
			}
		}
	}


	// set delays for blinking behavior on each pad
	// blink the current pad
	// turn off the previous pad as you blink the new one
	function howToBlink(padElement, count) {
		if (currentBeat === 0) {
			previousBeat = 31;
		} else {
			previousBeat = currentBeat-1;
		}

		if (activeSoundPattern[currentBeat] === 0) {
			padsArray[currentBeat].style.backgroundColor = padBackOffBlink;
		} else {
			padsArray[currentBeat].style.backgroundColor = padBackOnBlink;
		}
		
		if (activeSoundPattern[previousBeat] === 0) {
			padsArray[previousBeat].style.backgroundColor = padBackOff;
		} else {
			padsArray[previousBeat].style.backgroundColor = padBackOn;
		}
	}






	// This is where the actual playing of the sound happens.
	// Pull the sound name, create a path to the sound,
	// access the array for the sound and determine if it's on or off (1 or 0)
	// play the sound if it's on, get out of the function if it's off
	function howToPlay(count, drumArray, drumSound) {
		var soundPath = "audio/" + drumSound + ".wav"

		if (drumArray[count] === 1) {
			this.snd = new Audio(soundPath);
			snd.play();
		} else {
			return;
		}
	}