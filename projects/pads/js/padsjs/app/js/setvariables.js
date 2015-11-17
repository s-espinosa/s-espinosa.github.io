	//**INITIAL SETUP**//


//FIND NEW PLACE FOR THIS.
	// load audio
	var kickSound = new Audio("audio/kick.wav");
	var snareSound = new Audio("audio/snare.wav");
	var hatClosedSound = new Audio("audio/hatClosed.wav");
	var hatOpenSound = new Audio("audio/hatOpen.wav");

	// setup
	var onOff = "off";
	var toClearOnOff = 0;
	var currentBeat = 0; //Out of number of pads
	var previousBeat = 31; //Hard coded for 32 pads
	console.log(padsArray);
	var soundsArray = $(".sounds");
	console.log(soundsArray);

	// pad colors
	var padBackOn = kickOn;
	var padBackOnBlink = kickOnBlink;

	// old nice blue blink
	// var padBackOn = "#67A7CE";
	// var padBackOnBlink = "#7FC8F6";


	// instrument pattern arrays
	this.kickPattern = [];
	this.snarePattern = [];
	this.hatClosedPattern = [];
	this.hatOpenPattern = [];

	// Set kick as initial sound
	this.activeSound = "kick";
	this.activeSoundPattern = kickPattern;

	// initial beat per minute values
	var bpm = 100; //100 beats per minute hard coded for now
	var mspbeat = (60*1000)/bpm; //calculate milliseconds for each beat
	var msp16th = mspbeat/4; //calculate milliseconds for each sixteenth note