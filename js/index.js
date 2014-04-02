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
	pageMethods.doIntroAnimation();
	
	slideshow = new Slideshow('slider-content');
	
	$("#nav a.navItem").click(function() {
		var tabId = "navTab_" + $(this).text();
		$("#page_content .navTab").hide();
		$("#" + tabId).show();
		
		$("#nav a.navItem").removeClass("selected");
		$(this).addClass("selected");
	});
});

var pageMethods = {
	doIntroAnimation : function() {
		var STEP_SPEED = 300;
		$("#header").fadeTo(STEP_SPEED, 1, function() {
			$("#header .headerCarImage").fadeTo(STEP_SPEED, 1, function() {
				$("#header .us_states_flag").fadeTo(STEP_SPEED, 1, function() {
				$('#header .title_wrapper .image_timos').animate({right:'195px'}, STEP_SPEED, function() {
					$('#header .title_wrapper .image_detailing').animate({left:'709px'}, STEP_SPEED, function() {
						$("#main_section").fadeTo(STEP_SPEED * 5, 1);
						$("#footer").fadeTo(STEP_SPEED * 5, 1);
					});
				});
				});
			});
		});
	}
};

/**
 * Moves the "Timo's" logo in from the left and "Detailing" link in from the right
 */
function titleAnimation() {
	$('#header .title_wrapper .image_timos').animate({right:'285px'}, 300, function() {
		$('#header .title_wrapper .image_detailing').animate({left:'598px'},300,'linear');
	});
}
	