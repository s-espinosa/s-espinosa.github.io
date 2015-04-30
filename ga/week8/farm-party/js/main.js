$(document).ready(function(){

	var newCowX = 0;
	var newCowY = 0;

	var newChickenX = 0;
	var newChickenY = 0;

	var FarmAnimation = "on";

	var someAnimals = $.merge($(".cows"), $(".roosters"));
	var allAnimals = $.merge(someAnimals, $(".chicken"));

	function animateAnimals(callback) {

		if (FarmAnimation === "on") {

			$.each (allAnimals, function(index, value) {

				if ($(value).hasClass("cows")) {

					newCowX = Math.round(Math.random()*(360-20))+20;
					newCowY = Math.round(Math.random()*(60+60))-60;

					$(value).animate({
						left: newCowX,
						top: newCowY
					}, 8000);
				} else if ($(value).hasClass("roosters")) {

					newChickenX = Math.round(Math.random()*(900-600))+600;
					newChickenY = Math.round(Math.random()*(300-160))+160;

					$(value).animate({
						left: newChickenX,
						top: newChickenY
					}, 2000);
				} else {
					newChickenX = Math.round(Math.random()*(900-600))+600;
					newChickenY = Math.round(Math.random()*(300-160))+160;

					$(value).animate({
						left: newChickenX,
						top: newChickenY
					}, 2000, function() {
						callback(animateAnimals);
					});
				}
			});
		} else {
			return;
		}

	}

	$("h1").click(function() {
		if (FarmAnimation === "on") {
			FarmAnimation = "off";
		} else {
			FarmAnimation = "on";
			animateAnimals(animateAnimals);
		}
	});

animateAnimals(animateAnimals);

});