(function ($, Drupal, once) {
  Drupal.behaviors.customModuleBlockBehavior = {
    attach: function (context, settings) {
      let banks = settings.hd_custom_module.banks;
      $( "#custom-module-block-form", context ).on('change', function() {
        let bank = $( "#bank", context ).val();
        let amount = $( "#amount", context ).val();
        let advance = $( "#advance", context ).val();
        let months = $( "#months", context ).val();
      });
    }
  };
})(jQuery, Drupal, once);
