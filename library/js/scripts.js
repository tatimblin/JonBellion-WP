/*
 * Bones Scripts File
 * Author: Eddie Machado
 *
 * This file should contain any js scripts you want to add to the site.
 * Instead of calling it in the header or throwing it inside wp_head()
 * this file will be called automatically in the footer so as not to
 * slow the page load.
 *
 * There are a lot of example functions and tools in here. If you don't
 * need any of it, just remove it. They are meant to be helpers and are
 * not required. It's your world baby, you can do whatever you want.
*/


/*
 * Get Viewport Dimensions
 * returns object with viewport dimensions to match css in width and height properties
 * ( source: http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript )
*/
function updateViewportDimensions() {
	var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
	return { width:x,height:y };
}
// setting the viewport width
var viewport = updateViewportDimensions();


/*
 * Throttle Resize-triggered Events
 * Wrap your actions in this function to throttle the frequency of firing them off, for better performance, esp. on mobile.
 * ( source: http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed )
*/
var waitForFinalEvent = (function () {
	var timers = {};
	return function (callback, ms, uniqueId) {
		if (!uniqueId) { uniqueId = "Don't call this twice without a uniqueId"; }
		if (timers[uniqueId]) { clearTimeout (timers[uniqueId]); }
		timers[uniqueId] = setTimeout(callback, ms);
	};
})();

// how long to wait before deciding the resize has stopped, in ms. Around 50-100 should work ok.
var timeToWaitForLast = 100;


/*
 * Here's an example so you can see how we're using the above function
 *
 * This is commented out so it won't work, but you can copy it and
 * remove the comments.
 *
 *
 *
 * If we want to only do it on a certain page, we can setup checks so we do it
 * as efficient as possible.
 *
 * if( typeof is_home === "undefined" ) var is_home = $('body').hasClass('home');
 *
 * This once checks to see if you're on the home page based on the body class
 * We can then use that check to perform actions on the home page only
 *
 * When the window is resized, we perform this function
 * $(window).resize(function () {
 *
 *    // if we're on the home page, we wait the set amount (in function above) then fire the function
 *    if( is_home ) { waitForFinalEvent( function() {
 *
 *	// update the viewport, in case the window size has changed
 *	viewport = updateViewportDimensions();
 *
 *      // if we're above or equal to 768 fire this off
 *      if( viewport.width >= 768 ) {
 *        console.log('On home page and window sized to 768 width or more.');
 *      } else {
 *        // otherwise, let's do this instead
 *        console.log('Not on home page, or window sized to less than 768.');
 *      }
 *
 *    }, timeToWaitForLast, "your-function-identifier-string"); }
 * });
 *
 * Pretty cool huh? You can create functions like this to conditionally load
 * content and other stuff dependent on the viewport.
 * Remember that mobile devices and javascript aren't the best of friends.
 * Keep it light and always make sure the larger viewports are doing the heavy lifting.
 *
*/

/*
 * We're going to swap out the gravatars.
 * In the functions.php file, you can see we're not loading the gravatar
 * images on mobile to save bandwidth. Once we hit an acceptable viewport
 * then we can swap out those images since they are located in a data attribute.
*/
function loadGravatars() {
  // set the viewport using the function above
  viewport = updateViewportDimensions();
  // if the viewport is tablet or larger, we load in the gravatars
  if (viewport.width >= 768) {
  jQuery('.comment img[data-gravatar]').each(function(){
    jQuery(this).attr('src',jQuery(this).attr('data-gravatar'));
  });
	}
} // end function


/*
 * Put all your regular jQuery in here.
*/
jQuery(document).ready(function($) {

  /*
   * Let's fire off the gravatar function
   * You can remove this if you don't need it
  */
  loadGravatars();
    
    // Music Disk Animation
    $('.wrapper').on('click', function() {
        $(this).find('.buyHere').toggleClass('menu hide-menu');
        $(this).find('.disk').toggleClass('rollAway');
        $(this).find('.disk-text').toggleClass('hide-menu');
    });

    
//SCROLL MAGIC
    // loop through each element
//	$('.post-home').each(function(){
        
        // Init ScrollMagic
//        var controller = new ScrollMagic.Controller();

        // pin the intro
//        var pinIntroScene = new ScrollMagic.Scene({
//            triggerElement: this.children[0],
//            triggerHook: 0.15,
//            duration: '50%'

//        })
//        .setPin( this.children[0], {pushFollowers: false})
        /*.setClassToggle(this.children[0], 'fixed-imgPost')*/
        /*.addIndicators({
                name: 'fade scene',
                colorTrigger: 'black',
                indent: 200,
                colorStart: '#75C695'
        })*/
//        .addTo(controller);
        
//    });
        




// SOUNDCLOUD
    
jQuery(function($){ // same as document.ready but is considered a better practice
	
	var trackIds = [272661145, 272661532, 268382673, 272661795, 272661196, 272661158, 268382665, 272661445, 266099108, 266099063, 266099089, 266099091, 266099110];
  
   var trackNames = [
    "He Is The Same",
    "80's Films",
    "All Time Low",
    "New York Soul",
    "Fashion",
    "Maybe IDK",
    "Woke The F*ck Up",
    "Overwhelming",
    "Weight Of The World",
    "The Good In Me",
    "iRobot",
    "Hand Of God"
  ];
	
	var trackPlayCount = 0;
	var currentIndex = 0;
  
	var widget = SC.Widget('soundcloud-widget');

	function playTrack(index){
		widget.load(
			"https://api.soundcloud.com/tracks/" + trackIds[index],
			{
				auto_play: true,
				show_artwork: false,
				liking: false,
				sharing: false

				// Check out https://developers.soundcloud.com/docs/api/html5-widget#params
				// to see more parameters you can pass here...
			}
		);
		trackPlayCount ++;
		currentIndex = index;
  
  // Display Current Track Name
    $("#title").html(trackNames[currentIndex]);
	}
	
	function playNext(){
		var nextIndex = currentIndex + 1;
		if(nextIndex >= trackIds.length){
			nextIndex = 0;
		}
		playTrack(nextIndex);
	}
	
	function playPrev(){
		var nextIndex = currentIndex - 1;
		if(nextIndex < 0){
			nextIndex = trackIds.length - 1;
		}
		playTrack(nextIndex);
	}
	
	function playToggle(){
		widget.toggle();
	}

	function onTrackFinished() {
		playNext();
	}


	
	
	// Bind our functions to events ___________________________________

	// Event: widget finished song
	widget.bind(SC.Widget.Events.FINISH, onTrackFinished);
	
	// Event: clicked on #play-toggle
	$('#play-toggle, .player-play , .player-pause').on('click', playToggle);
	
	$('#prev, .player-prev').on('click', playPrev);
	
	$('#next, .player-next').on('click', playNext);

	
	
	
	// And, by default we load the first song...
	
	playTrack(0);

});

// Toggle Play and Pause
$('.player-pause, .player-play').on('click', function() {
  
  $('.player-pause, .player-play').toggleClass('control-hidden');
  $('.player-progress').toggleClass('progress-pause');
});

// Toggle progress bar animation
// $('.player-control').on('click', function() { 
//   $('.player-progress').toggleClass('progress-pause');
// });

// Insert Track Name 



// FIXED IMAGES
// Initial code from Chelsea Myers
// http://codepen.io/tatimblin/pen/OXdKaV?editors=0010
    
$(document).ready(function(){
  headings = $('[data-section-title]');

  
});


$(window).scroll(autoSelectStickyNav);

function autoSelectStickyNav() {

  var windowTop = $(window).scrollTop();
  var h = $(window).height();

  var shownHeadings = [];
  $('[data-nav-item]').removeClass('coverActive');

  headings.each(function(i){
    if(headings[i+1]){
      var headingOffsetTop = ($(headings[i+1]).offset().top - windowTop) / h;
      
      if(headingOffsetTop > 0.1 & $(this).offset().top < (windowTop + h - 300)) {
        shownHeadings.push($(headings[i]));
      }
    }
   

    //If heading on screen and is 10% away from top of screen
   
    
   

    // If last heading, keep highlighted if scrolled passed
    if (i == headings.length - 1 & $(this).offset().top < (windowTop + h)) {
      shownHeadings.push($(this));
    }

  });

  //Loop through headings stored as showing
  //add active class to nav item
  for(heading of shownHeadings){
    var selector = '[data-nav-item="' + heading.data('section-title') + '"]';
    if(!$(selector).hasClass('coverActive')){
      $(selector).addClass('coverActive');
    }
    
  }

  
  shownHeadings = [];
}














    
    
    
    
    
    
    
    

}); /* end of as page load scripts */
