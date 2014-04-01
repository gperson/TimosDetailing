/**
  * Slideshow.js
  */
function Slideshow(element) {
	
	/**
	 * After initialization, this object contains the DOM element of the object to become a slideshow.
	 */
	this.element = document.getElementById(element);
	
	/**
	 * The intervalId unique to the window.
	 */
	this.intervalId = 0;
	
	/**
	 * The speed of the slideshow.
	 */
	this.speed = 10000;
	
	/**
	 * Instance object
	 */
	var instance = this;
	
	/**
	 * Plays the slideshow object.
	 */
	this.play = function() {
		var element = instance.element;
		var offsetWidth = this.element.offsetWidth
		this.intervalId = setInterval(function (){
			instance.slide(offsetWidth / element.children.length, offsetWidth)
		}, this.speed);
	};
	
	/**
	 * Pauses the slideshow object.
	 */
	this.pause = function() {
		clearInterval(instance.intervalId);
	};
	
	/**
	 * Slides the slideshow by 'distance' in pixels and provides the 'maxMoveTotal' for bounds
	 */
	this.slide = function(distance, maxMoveTotal) {
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
	};
	
	/**
	 * Initializes the slideshow object. 'id' should be a string containing the id value of the object
	 * to become a slideshow.
	 */
	this.init = function(id) {
		sliders = this.element.children;
		numSlides = sliders.length; 
		
		sliderContent = document.getElementById(id);
		sliderContent.style.width = (numSlides * 100) + "%";
		
		width = (100 / numSlides) + "%";
		for (var i=0;i<numSlides;i++)
		{ 
			sliders[i].style.width = width;
		}
		instance.play();
	};
	
	this.init(element);
};