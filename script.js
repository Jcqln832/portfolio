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

//reveal projects
ScrollReveal().reveal('.one', { easing: 'ease-in-out', duration: 550, delay: 100, origin: "top" });
ScrollReveal().reveal('.two', { easing: 'ease-in-out', duration: 550, delay: 250, origin: "top" });
ScrollReveal().reveal('.three', { easing: 'ease-in-out', duration: 550, delay: 400, origin: "top" });
ScrollReveal().reveal('.four', { easing: 'ease-in-out', duration: 550, delay: 550, origin: "top" });

//reveal contact section content
ScrollReveal().reveal('.contact-content', { easing: 'ease-in-out', duration: 550, delay: 200 });