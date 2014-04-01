/**
 * index.js
 */

 /**
  * slideshow object
  */
var slideshow;

/**
 * Runs when document has loaded.
 */
$(document).ready(function() {
	titleAnimation();
	slideshow = new Slideshow('slider-content');
});

/**
 * Moves the "Timo's" logo in from the left and "Detailing" link in from the right
 */
function titleAnimation() {
	$('#timos').animate({left:'463px'},500,'linear');
	$('#detailing').animate({right:'340px'},500,'linear');
}
	