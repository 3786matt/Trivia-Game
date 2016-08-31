
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
			if(time=0){
				clearInterval(counter);


				// $('#timer').html('Game Over!');
				// $('.qs').hide();
			}
			// stop the countdown


			// alert that time is down


			// end game (based on object?)
		},
	}


$(document).ready(function(){



	var wins=0;
	var losses=0;
	var unanswered=0;


	function hide() {
		$('.qs').hide();
		$('#score').hide();
		$('#timer').hide();
		$('#button2').hide();

	};

	hide();

	$('#button1').on("click", function() {
		$('#start').hide();
		$('#q1').show();
		$('#timer').show();
		$('#button2').show();
		stopwatch.start();

	});




	$('#button2').on('click', function(){

	var answer  = $("input[name='inp']:checked").val();

	if(typeof answer == "undefined") {
		unanswered++;
	} else if(answer == "Washington D.C."){
		wins++;
	} else {
		losses++;
	}


	});

	$('#button2').on('click', function(){

	var answer  = $("input[name='inp1']:checked").val();

	if(typeof answer == "undefined") {
		unanswered++;
	} else if(answer == "London"){
		wins++;
	} else {
		losses++;
	}

	});

	$('#button2').on('click', function(){

	var answer  = $("input[name='inp2']:checked").val();

	if(typeof answer == "undefined") {
		unanswered++;
	} else if(answer == "Paris"){
		wins++;
	} else {
		losses++;
	}


	});

	$('#button2').on('click', function(){

	var answer  = $("input[name='inp3']:checked").val();

	if(typeof answer == "undefined") {
		unanswered++;
	} else if(answer == "Beijing"){
		wins++;
	} else {
		losses++;
	}


	});

	$('#button2').on('click', function(){

	var answer  = $("input[name='inp4']:checked").val();

	if(typeof answer == "undefined") {
		unanswered++;
	} else if(answer == "New Delhi"){
		wins++;
	} else {
		losses++;
	}


	});

	$('#button2').on('click', function(){

	var answer  = $("input[name='inp5']:checked").val();

	if(typeof answer == "undefined") {
		unanswered++;
	} else if(answer == "Jakarta"){
		wins++;
	} else {
		losses++;
	}


	});

	$('#button2').on('click', function(){

	var answer  = $("input[name='inp6']:checked").val();

	if(typeof answer == "undefined") {
		unanswered++;
	} else if(answer == "Naypyidaw"){
		wins++;
	} else {
		losses++;
	}


	});

	$('#button2').on('click', function(){

	var answer  = $("input[name='inp7']:checked").val();

	if(typeof answer == "undefined") {
		unanswered++;
	} else if(answer == "Moscow"){
		wins++;
	} else {
		losses++;
	}


	});

	$('#button2').on('click', function(){

	var answer  = $("input[name='inp8']:checked").val();

	if(typeof answer == "undefined") {
		unanswered++;
	} else if(answer == "Abuja"){
		wins++;
	} else {
		losses++;
	}

	});

	$('#button2').on('click', function(){

	var answer  = $("input[name='inp9']:checked").val();

	if(typeof answer == "undefined") {
		unanswered++;
	} else if(answer == "Ankara"){
		wins++;
	} else {
		losses++;
	}


	});
	$('#button2').on('click', function(){

	var answer  = $("input[name='inp10']:checked").val();

	if(typeof answer == "undefined") {
		unanswered++;
	} else if(answer == "Cairo"){
		wins++;
	} else {
		losses++;
	}

	});

	$('#button2').on('click', function(){

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
	$('#button2').on('click', function(){

		$('#score').show();
		$('#correct').html("Correct: " + wins);
		$('#wrong').html("Incorrect: " + losses);
		$('#unanswered').html("Unanswered: " + unanswered);

		

	});





















	









// console.log(wins);
// console.log(losses);
// console.log(unanswered);








});




