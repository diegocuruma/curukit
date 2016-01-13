
// novo painel responsivo
    jQuery(document).ready(function($) {
      $("#owl-demo").owlCarousel({
          
      autoPlay: true,
      navigation : false,
      slideSpeed : 300,
      paginationSpeed : 400,
      pagination : false,
      singleItem : true

      });

        var owl = $("#owl-demo");

        owl.owlCarousel();

        // Custom Navigation Events
        $(".next").click(function(){
        owl.trigger('owl.next');
        })
        $(".prev").click(function(){
        owl.trigger('owl.prev');
        })
    });



// carousel logos
    jQuery(document).ready(function($) {
    $( "#logo" ).owlCarousel({
        autoPlay : true,
        loop:true,
        slideSpeed : 300,
        paginationSpeed : 700,
        pagination : false,
        items : 4,
        itemsDesktop: [1024,3],
        itemsTablet: [800,2],
        itemsMobile: [480,2]
    });

    var owl1 = $( "#logo" );
    owl1.owlCarousel();
    // Custom Navigation Events
    $( ".next1" ).click(function(){owl1.trigger( 'owl.next' );});
    $( ".prev1" ).click(function(){owl1.trigger( 'owl.prev' );});



    });


//cortar txt
jQuery(document).ready(function($){
      $(".mostrar").click(function(e) {
        e.preventDefault();  
        $(".texto").toggleClass('completo');
          
          //condicional
          if($(".mostrar").text() == "Leia História Completa"){
                $(".mostrar").text("Ocultar História");}
            else{$(".mostrar").text("Leia História Completa");}
            });
 
 }); 

//vertical tabs
jQuery(document).ready(function($){
	var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}
});


