
// novo painel responsivo
    jQuery(document).ready(function($) {
      $('#owl-demo').owlCarousel({

          
            // apenas fade normal
            /*animateOut: 'fadeOut',
            items:1,
            nav:true,            
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true  */   
          
            animateOut: 'fadeOut',
            items:1,
            nav:true,            
            loop:true,
            margin:0,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,            
          
      })    
    });


// carousel logos
    jQuery(document).ready(function($) {
        $('#logo').owlCarousel({
        items:4,
        nav:true,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    });


//menu fixo animado
   
jQuery("document").ready(function($){  
var nav = $('.nav-conteiner');  
$(window).scroll(function () {
    if ($(this).scrollTop() > 140) {
        nav.addClass("f-nav");							
    } 
    else {nav.removeClass("f-nav"); } 
    });   
});

//limpar form
function limparPadrao(campo) {if (campo.value == campo.defaultValue) {campo.value = "";}}
function escreverPadrao(campo) {if (campo.value == "") {campo.value = campo.defaultValue;}}




//menu responsivo
$(document).ready(function() {
  //add class js no body
  $('body').addClass('js');
$(".anima-menu, .menu-link").click(function(){
      //nav
      $("#menu").toggleClass('active');
  
    });
});
    



	
	
	