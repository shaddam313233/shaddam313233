'use strict';
$(document).ready(function(){
    // back to top btn
    
    $(window).on('scroll',function(){
    
        var scrolling = $(this).scrollTop();
    
        if( scrolling > 200){
            $('.back-top-btn').fadeIn();
        }else{
            $('.back-top-btn').fadeOut();
        }
    
        $('.back-top-btn').on('click',function(){
            $('body,html').animate({
                scrollTop:'0',
            },1500);
        })
    });

// // cursor effect
// var cursor = document.querySelector(".cursor");
// var cursor2 = document.querySelector(".cursor2");
// document.addEventListener("mousemove",function(a){
//  cursor.style.cssText = cursor2.style.cssText = "left: " + a.clientX + "px; top: " + a.clientY + "px;";
// });

// text effect
var typed = new Typed('.type', {
    strings: 
    [

    "shaddam.", 
    "i am a front-end developer.",
    "how  can i help you?"
     ],

    typeSpeed:50,
    backSpeed:50,
    loop:true,
  });
  
  
  AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


});
