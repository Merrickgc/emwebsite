$(document).ready(function(){
    /* Inicio del slide para las categorias*/
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:6, //cantidad de iconos en pantalla
        loop:true, //reinicio automatico
        margin:10,
        autoplay:false,
        autoplayTimeout:4500, //duracion transicion
        autoplayHoverPause:true
    });
   //duración inicio automatico
    owl.trigger('play.owl.autoplay',[4500])
});

//Aletrea de producto agregado
function carrito(){
    alert("Producto añadido al carrito");
}
    