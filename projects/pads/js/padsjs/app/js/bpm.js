




	// create bpm slider
	$( "#bpmSlider" ).slider({
		value: 50,
		range: "min",
		change: function( event, ui ) {
			changeBPM()
		}
	});

	
	// get BPM from bpmSlider and update global bpm
	function changeBPM() {
		var bpmSliderValue = $("#bpmSlider").slider("value");
		console.log(bpmSliderValue);
		bpm = 50 + bpmSliderValue;
		console.log (bpm);
		mspbeat = (60*1000)/bpm; //calculate milliseconds for each beat
		msp16th = mspbeat/4; //calculate milliseconds for each sixteenth note

		if (onOff === "on") {
			clearInterval(toClearOnOff);
			toClearOnOff = setInterval(function(){blinkOn();}, msp16th);
		} else {
			return;
		}
	}