$(document).ready(function(){



var wins=0;
var losses=0;
var unanswered=0;


function hide() {
	$('.qs').hide();
	$('#score').hide();

};

hide();

$('#button1').on("click", function() {
	$('#start').hide();
	$('.qs').show();
});

// $("#button2").on("click", function(){
	
// 	if($(".correct").checked) {
// 		wins=wins+1;
// 		console.log(wins);
// 	};

// 	// else if($(".incorrect").checked) {
// 	// 	losses=losses+1;
// 	// 	console.log(losses);
// 	// }

// 	else {
// 		unanswered=unanswered+1;
// 		console.log(unanswered);

// 	}


// });








// $('#button2').on("click", function() {
// 	$(".correct").function() { 
// 		wins=wins+1;}
// 	});
	
// document.querySelector('input[class=".correct"]:checked').value;






	// if(class =".correct") {
	// 	wins=wins+1;
	// };

// 	else if(class=".incorrect") {
// 		losses=losses+1;
// 	};




// });







	









console.log(wins);
console.log(losses);
console.log(unanswered);








});




