


$(document).ready(function() {

	var stopwatch = {
		time:100,
		
		start: function() {
			counter = setInterval(stopwatch.decrement, 1000);
			console.log('lookie ere', stopwatch.time);
		},

		decrement: function() {
			if(stopwatch.time > 0) {
				stopwatch.time--;

				$('#timer').text(stopwatch.time);

				console.log('decrement timer ', stopwatch.time);
			} else {
			
				stopwatch.stop();
				$('#score').show();
				$('#done').hide();
			}
		},

		stop: function(){
				clearInterval(counter);
				$('#header').text('Game Over!');
				$('.qs').fadeOut();
				tallyAnswers();
			},

		};

	var wins=0;
	var losses=0;
	var unanswered=0;


	function hide() {
		$('.qs').hide();
		$('#score').hide();
		$('#timer').hide();
		$('#done').hide();
		$('#q').hide();
		$('#bonus').hide();

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

		
$('#done').on('click', function(event){
	tallyAnswers();
	});


function tallyAnswers(){
		console.log('tallyAnswers');

	var answer  = $("input[name='inp']:checked").val();

	if(typeof answer == "undefined") {
		unanswered++;
	} else if(answer == "Washington D.C."){
		wins++;
	} else {
		losses++;
	}

	var answer  = $("input[name='inp1']:checked").val();

	if(typeof answer == "undefined") {
		unanswered++;
	} else if(answer == "London"){
		wins++;
	} else {
		losses++;
	}

	var answer  = $("input[name='inp2']:checked").val();

	if(typeof answer == "undefined") {
		unanswered++;
	} else if(answer == "Paris"){
		wins++;
	} else {
		losses++;
	}

	var answer  = $("input[name='inp3']:checked").val();

	if(typeof answer == "undefined") {
		unanswered++;
	} else if(answer == "Beijing"){
		wins++;
	} else {
		losses++;
	}

	var answer  = $("input[name='inp4']:checked").val();

	if(typeof answer == "undefined") {
		unanswered++;
	} else if(answer == "New Delhi"){
		wins++;
	} else {
		losses++;
	}

	var answer  = $("input[name='inp5']:checked").val();

	if(typeof answer == "undefined") {
		unanswered++;
	} else if(answer == "Jakarta"){
		wins++;
	} else {
		losses++;
	}

	var answer  = $("input[name='inp6']:checked").val();

	if(typeof answer == "undefined") {
		unanswered++;
	} else if(answer == "Naypyidaw"){
		wins++;
	} else {
		losses++;
	}

	var answer  = $("input[name='inp7']:checked").val();

	if(typeof answer == "undefined") {
		unanswered++;
	} else if(answer == "Moscow"){
		wins++;
	} else {
		losses++;
	}

	var answer  = $("input[name='inp8']:checked").val();

	if(typeof answer == "undefined") {
		unanswered++;
	} else if(answer == "Abuja"){
		wins++;
	} else {
		losses++;
	}

	
	var answer  = $("input[name='inp9']:checked").val();

	if(typeof answer == "undefined") {
		unanswered++;
	} else if(answer == "Ankara"){
		wins++;
	} else {
		losses++;
	}


	var answer  = $("input[name='inp10']:checked").val();

	if(typeof answer == "undefined") {
		unanswered++;
	} else if(answer == "Cairo"){
		wins++;
	} else {
		losses++;
	}


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

		$('#score').fadeIn();
		$('#done').hide();
		$('#correct').html("Correct: " + wins);
		$('#wrong').html("Incorrect: " + losses);
		$('#unanswered').html("Unanswered: " + unanswered);
		$('.qs').fadeOut();
		clearInterval(counter);
		$('#header').text('Game Over!');
		
		

	}
});




