'use strict';

// $('button, .nav-link').click(function(){
//     $(".nav-list").toggleClass("active");
// });

$('.hamburger').click (function(){
	$(this).toggleClass('open');
	$(".nav-list").toggleClass("nav-list__active");
	$("nav").toggleClass("nav-opacity");
	$(".hamburger__meat").toggleClass("meat-opacity");

})
  
// $('#btn-nav-toggle').click (function(){
//   	$(".nav-list").toggleClass("active");
//   }

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