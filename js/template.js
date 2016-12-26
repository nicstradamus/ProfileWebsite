$(document).ready (function() {
	
	/*----HIDE WORKS, DURATION DOES NOT--------*/
	// $("h1").click(function(){
		
		// $("p").hide(5000);
	
	// });
	
	/*----TOGGLE WORKS, DURATION DOES NOT--------*/
	$("h1").mouseenter(function(){
		
		$("p").toggle(5000);
	
	});
	
	/*----FADEIN/FADEOUT DO NOT WORK--------*/
	$("h1").mouseenter(function(){
		
		$("p").fadeIn(5000);
	
	});
	

});