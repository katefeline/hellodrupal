(function ($, Drupal, once) {

  Drupal.behaviors.burgerMenuBehavior = {
    attach: function (context, settings) {
      $('.burger-menu').on('click', function () {
        $(this).toggleClass('burger-menu_active');
        $('.region-header').toggleClass('region-header_active');
      })
    }
  };
})(jQuery, Drupal, once);
