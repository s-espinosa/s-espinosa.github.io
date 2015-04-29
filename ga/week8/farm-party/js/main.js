$(document).ready(function(){

	var newCowX = 0;
	var newCowY = 0;

	var newChickenX = 0;
	var newChickenY = 0;

	function animateAnimals(callback) {

		$.each ($(".cows"), function(index, value) {

			newCowX = Math.round(Math.random()*(360-20))+20;
			newCowY = Math.round(Math.random()*(60+60))-60;

			$(value).animate({
				left: newCowX,
				top: newCowY
			}, 8000);
		});

		$.each ($(".chickens"), function(index, value) {

			newChickenX = Math.round(Math.random()*(900-600))+600;
			newChickenY = Math.round(Math.random()*(300-160))+160;

			$(value).animate({
				left: newChickenX,
				top: newChickenY
			}, 4000);
		});

		callback(animateAnimals);

	}

animateAnimals(animateAnimals);

});