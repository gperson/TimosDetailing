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
	numSlides = sliders.length; //No of items in the above array
	
	sliderContent = document.getElementById('slider-content'); //#slider-content
	sliderContent.style.width = (numSlides * 100) + "%";
	
	width = (100 / numSlides) + "%";
	for (var i=0;i<numSlides;i++)
	{ 
		sliders[i].style.width = width;
	}
	setInterval(function (){slide()}, 5000);
});

function slide() {
    $("#slider").animate({ "left": "-=50px" }, "slow" );
}