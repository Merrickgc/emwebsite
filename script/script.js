$(document).ready(function(){

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:6,
        loop:true,
        margin:10,
        autoplay:false,
        autoplayTimeout:4500,
        autoplayHoverPause:true
    });
   
    owl.trigger('play.owl.autoplay',[4500])

});