$(document).ready(function (){
    // Get window size
    var width = $(window).width(),
        height = $(window).height(),
    // Minimized the width
        costumizedWidth = width - 32,
        minimizedHeight = height -  300,
    // Get image by class
        image = $('.pentatonix');

    if(navigator.userAgent.toLowerCase().indexOf("android") > -1) {
      image.css('width', costumizedWidth)
    }
    else if (navigator.userAgent.toLowerCase().indexOf("iphone") > -1 ){
      image.css('width', costumizedWidth)
    }
});
