$(document).ready(function() {
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").show(); //.show tells it to show the item
		$(".stream2").show('slow'); //slow,medium and fast are the three presets
		$(".stream3").show('medium');
	  	$(".stream1").show('fast');
	  	$(".stream1").show(1000); //can also define it by milliseconds

	});
	
	
	
	$("#stream2_btn").on("click", function() {
		$(".stream1").hide(); //.hide is the opposite of .show.. it hides the item
		$(".stream2").hide('slow'); //slow,medium and fast are the three presets
		$(".stream3").hide('medium');
	  	$(".stream1").hide('fast');
	  	$(".stream1").hide(1000); //can also define it by milliseconds
	});
	
	
	
	$("#stream3_btn").on("click", function() {
		$(".stream1").toggle(); // works like an on off button.. if the item is showing.. it will hide it .. if its hidden.. it will show it
		$(".stream2").toggle('slow'); //slow,medium and fast are the three presets
		$(".stream3").toggle('medium');
	  	$(".stream1").toggle('fast');
	  	$(".stream1").toggle(1000); //can also define it by milliseconds
	});

/*can also use
.slideDown or .slideUp
.slideToggle
.fadeIn or .fadeOut
.fadeToggle
.fadeTo(millseconds, opacity) (this one allows you to fade it to a specific opacity - e.g. .fadeTo(1000, 0.5))

*/


}); 
