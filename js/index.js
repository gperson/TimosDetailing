/**
 * index.js
 */

/**
 * Runs when document has loaded.
 */
$(document).ready(function() {
	//All code
	var slider = document.getElementById('slider-content'); 
	sliders = slider.children;
	numSlides = sliders.length; 
	
	sliderContent = document.getElementById('slider-content'); //#slider-content
	sliderContent.style.width = (numSlides * 100) + "%";
	
	width = (100 / numSlides) + "%";
	for (var i=0;i<numSlides;i++)
	{ 
		sliders[i].style.width = width;
	}
	var distance = (slider.offsetWidth/numSlides);
	setInterval(function (){slide(distance,slider.offsetWidth)}, 10000);
});

function slide(distance,maxMoveTotal) {
	var slider = document.getElementById('slider-content');
	var currentPosition = slider.style.left;
	var currentLeft = (currentPosition.replace("px", ""));
	if(currentLeft == null || currentLeft == ""){
		currentLeft = 0;
	}
	
	var left = 0;
	if((Math.abs(parseFloat(currentLeft))+.3) < (parseFloat(maxMoveTotal) - parseFloat(distance))){
		left = (parseFloat(currentLeft) + (-distance));
	}
	$("#slider-content").animate({ "left": left }, "slow" );
}