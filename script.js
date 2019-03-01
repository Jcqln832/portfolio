'use strict';

$('button, .nav-link').click(function(){
    $(".nav-list").toggleClass("active");
});


 /* adapted from https://www.taniarascia.com/smooth-scroll-to-id-with-jquery/ */

 $("a[href^='#']").click(function(e) {
    e.preventDefault();
    var navHeight = $("nav").height()
	
	var position = $($(this).attr("href")).offset().top - navHeight;

	$("body, html").animate({
		scrollTop: position
	}, 300, 'swing' );
});

// let nodeArray = [
//     $('.about-content'),
//     $(".headshot")
// ];
ScrollReveal().reveal('.contact-content', { easing: 'ease-in-out', duration: 550, delay: 200 });