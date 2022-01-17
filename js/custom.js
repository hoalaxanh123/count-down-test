(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    // MENU
    $('.menu-burger').on('click', function() {
      $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
      $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
    });




})(jQuery);

$( document ).ready(function() {
  
  // var source = "sounds/sound.mp3"
  // var audio = document.createElement("audio");
  // //
  // audio.autoplay = true;
  // //
  // audio.load()
  // audio.addEventListener("load", function() { 
  //     audio.play(); 
  // }, true);
  // audio.src = source;
  // audio.play(); 

});