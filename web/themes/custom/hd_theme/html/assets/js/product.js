(function ($, Drupal, once) {
  Drupal.behaviors.productSliderBehavior = {
    attach: function (context, settings) {
      $('.product__images .slider-for .product-slider').once().slick({
      });
      $('.product__images .slider-nav .product-slider').once().slick({
        asNavFor: '.product__images .slider-for .product-slider',
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          // {
          //   breakpoint: 600,
          //   settings: {
          //     slidesToShow: 2,
          //     slidesToScroll: 2
          //   }
          // },
          // {
          //   breakpoint: 480,
          //   settings: {
          //     slidesToShow: 1,
          //     slidesToScroll: 1
          //   }
          // }
        ]
      });
      Fancybox.bind(".slider-for .slick-slide img", {
        // Your options go here
      });
    }
  };

  Drupal.behaviors.productTabsBehavior = {
    attach: function (context, settings) {
      $(function() {
        $('.tabs__buttons').on('click', 'div:not(.field-tab__item_active)', function() {
          $(this).addClass('field-tab__item_active').siblings().removeClass('field-tab__item_active')
            .closest('div.tabs').find('div.field-content__item').removeClass('field-content__item_active')
            .eq($(this).index()).addClass('field-content__item_active');
        })
      })
    }
  };
})(jQuery, Drupal, once);
