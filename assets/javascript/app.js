
var stopwatch = {
		time:5,
		// sec:0,
		start: function() {
			// display startime in div

			// every second decrement 
			counter = setInterval(stopwatch.decrement, 1000);
			console.log('lookie ere', stopwatch.time);

			// display "new time" in div
			
		},
		decrement: function() {
			stopwatch.time --;
			$('#timer').text(stopwatch.time);
			console.log('decrement timer ', stopwatch.time);
		},
		stop: function(){
			// if(stopwatch.time=0) {
				clearInterval(counter);
				$('#header').text('Game Over!');
				$('.qs').fadeOut();
				// clearTimeout(stopwatch);
				// ('#timer').hide();
				// alert('game over');

				// $('#timer').html('Game Over!');
				// $('.qs').hide();
			},

};


	// 	$('#timer').text===0 function()
	// {
	// 	stopwatch.stop();
	// };

			// if(stopwatch.time==0) {
			// 	clearInterval(counter);
			// 	$('#header').text('Game Over!');
			// 	$('.qs').fadeOut();

			// }

			// else{
			// 	alert('continue');
			// }
			// stop the countdown


			// alert that time is down


			// end game (based on object?)

// 	check: function() {
// 	if(stopwatch.time=0) {
// 		stopwatch.stop();
// 	};
// 	else{
// 		alert('game over');
// 	};
// };
// 		}
// 	// }

// check();


$(document).ready(function(){

// function check() {
// 	if(stopwatch.time <1) {
// 		stopwatch.stop();
// 	}
	// else() {
	// 	break;
	// }
// };

// check();

	var wins=0;
	var losses=0;
	var unanswered=0;


	function hide() {
		$('.qs').hide();
		$('#score').hide();
		$('#timer').hide();
		$('#done').hide();
		$('#q').hide();

	};

	hide();

	$('#start').on("click", function() {
		$('#start').hide();
		$('.qs').show();
		$('#timer').show();
		$('#done').show();
		$('#q').show();
		stopwatch.start();

	});

	

	$('#done').on('click', function(){

	var answer  = $("input[name='inp']:checked").val();

	if(typeof answer == "undefined") {
		unanswered++;
	} else if(answer == "Washington D.C."){
		wins++;
	} else {
		losses++;
	}


	});

	$('#done').on('click', function(){

	var answer  = $("input[name='inp1']:checked").val();

	if(typeof answer == "undefined") {
		unanswered++;
	} else if(answer == "London"){
		wins++;
	} else {
		losses++;
	}

	});

	$('#done').on('click', function(){

	var answer  = $("input[name='inp2']:checked").val();

	if(typeof answer == "undefined") {
		unanswered++;
	} else if(answer == "Paris"){
		wins++;
	} else {
		losses++;
	}


	});

	$('#done').on('click', function(){

	var answer  = $("input[name='inp3']:checked").val();

	if(typeof answer == "undefined") {
		unanswered++;
	} else if(answer == "Beijing"){
		wins++;
	} else {
		losses++;
	}


	});

	$('#done').on('click', function(){

	var answer  = $("input[name='inp4']:checked").val();

	if(typeof answer == "undefined") {
		unanswered++;
	} else if(answer == "New Delhi"){
		wins++;
	} else {
		losses++;
	}


	});

	$('#done').on('click', function(){

	var answer  = $("input[name='inp5']:checked").val();

	if(typeof answer == "undefined") {
		unanswered++;
	} else if(answer == "Jakarta"){
		wins++;
	} else {
		losses++;
	}


	});

	$('#done').on('click', function(){

	var answer  = $("input[name='inp6']:checked").val();

	if(typeof answer == "undefined") {
		unanswered++;
	} else if(answer == "Naypyidaw"){
		wins++;
	} else {
		losses++;
	}


	});

	$('#done').on('click', function(){

	var answer  = $("input[name='inp7']:checked").val();

	if(typeof answer == "undefined") {
		unanswered++;
	} else if(answer == "Moscow"){
		wins++;
	} else {
		losses++;
	}


	});

	$('#done').on('click', function(){

	var answer  = $("input[name='inp8']:checked").val();

	if(typeof answer == "undefined") {
		unanswered++;
	} else if(answer == "Abuja"){
		wins++;
	} else {
		losses++;
	}

	});

	$('#done').on('click', function(){

	var answer  = $("input[name='inp9']:checked").val();

	if(typeof answer == "undefined") {
		unanswered++;
	} else if(answer == "Ankara"){
		wins++;
	} else {
		losses++;
	}


	});
	$('#done').on('click', function(){

	var answer  = $("input[name='inp10']:checked").val();

	if(typeof answer == "undefined") {
		unanswered++;
	} else if(answer == "Cairo"){
		wins++;
	} else {
		losses++;
	}

	});

	$('#done').on('click', function(){

	var answer  = $("input[name='inp11']:checked").val();

	if(typeof answer == "undefined") {
		unanswered++;
	} else if(answer == "Brasilia"){
		wins++;
	} else {
		losses++;
	}
	console.log("w:"+wins);
	console.log("l:"+losses);
	console.log("u:"+unanswered);

	});

	// build a game object, with game.wins, game.losses, game.end(), game.start()
	$('#done').on('click', function(){

		$('#score').show();
		$('#done').hide();
		$('#correct').html("Correct: " + wins);
		$('#wrong').html("Incorrect: " + losses);
		$('#unanswered').html("Unanswered: " + unanswered);
		stopwatch.stop();

		

	});





















	









// console.log(wins);
// console.log(losses);
// console.log(unanswered);








});




