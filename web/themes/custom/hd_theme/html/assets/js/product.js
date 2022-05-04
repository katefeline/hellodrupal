(function ($, Drupal, once) {
  Drupal.behaviors.productSliderBehavior = {
    attach: function (context, settings) {
      $('.product__images .slider-for .product-slider', context).slick({
      });
      $('.product__images .slider-nav .product-slider', context).slick({
        asNavFor: '.product__images .slider-for .product-slider',
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true
      });

    }
  };
})(jQuery, Drupal, once);
