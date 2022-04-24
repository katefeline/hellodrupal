(function ($, Drupal, once) {
  Drupal.behaviors.myModuleBehavior = {
    attach: function (context, settings) {
      $('.slider-for', context).slick({
      });
    }
  };
})(jQuery, Drupal, once);
