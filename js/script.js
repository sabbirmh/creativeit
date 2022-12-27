$(function () {
    'use strict';

        // video ====

        $('.venobox').venobox();
 
      // client ===
  
      $('.all_row').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        speed: 3000,
        arrows: true,
        prevArrow: '<i class="fas fa-caret-left prv_arr"></i>',
        nextArrow: '<i class="fas fa-caret-right next_arr"></i>',
  
        responsive: [{
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2,
          }
        },
    
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
          }
        }
      ]
      });

  });