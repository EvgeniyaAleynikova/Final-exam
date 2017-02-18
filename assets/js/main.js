$(document).ready(function(){
   $('.slider-wrap').slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: false,
        prevArrow: ".slider-prev",
        nextArrow: ".slider-next",
        responsive: [{
        breakpoint: 780,
        settings: {
        arrows: false,
        autoplay: true,
        speed: 500
        }
      }
    ]
  });
   $('.slider-wrap').on('beforeChange', function(event, slick, currentSlide){
    	$('.slider-wrap #slide-right').jAnimateOnce('fadeInRight', function(self, effect){
		});
    	$('.slider-wrap #slide-left').jAnimateOnce('fadeInLeft', function(self, effect){
		});

    });
});	 
 $(window).scroll(function(){
    if($(document).scrollTop() > 50){
      $('nav').addClass('scroll-menu');
    }
    else{
      $('nav').removeClass('scroll-menu');
    }
  });

 $(window).resize(function(){
    if($(window).width()<768){
      $('.slider-next').addClass('del');
      $('.slider-prev').addClass('del');
    }
    if($(window).width()>768){
      $('.slider-next').removeClass('del');
      $('.slider-prev').removeClass('del');
    }
  });
