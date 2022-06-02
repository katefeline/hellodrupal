(function ($, Drupal, once) {
  Drupal.behaviors.customModuleBlockBehavior = {
    attach: function (context, settings) {
      let banks = settings.hd_custom_module.banks;
      $( "#custom-module-block-form", context ).on('change', function() {
        let bank = $( "#bank", context ).val();
        let amount = +$( "#amount", context ).val();
        let advance = +$( "#advance", context ).val();
        let months = +$( "#months", context ).val();
        if (months <= getBank (bank).months) {
          let sum = amount - ((amount/ 100) * advance);
          let result = (sum + ((sum/100) * getBank (bank).percentage)) / months;
          console.log(result);
          $('.result-content').html('<p>' + result + '</p>');
        }
        else {
          let sum = amount - ((amount/ 100) * advance);
          let result = (sum + ((sum/100) * 3.5)) / months;
          console.log(result);
          $('.result-content').html('<p>' + result + '</p>');
        }
        checkAmount ();
        checkAdvance ();
        checkMonths ();
      });

      function checkAmount () {
        $( "#amount", context ).focus( function () {
          $( "#amount", context ).removeClass('error');
        });
        $( "#amount", context ).focusout( function () {
          let val = $( "#amount", context ).val();
          if (val < 1000 || val > 10000) {
            $( "#amount", context ).addClass('error');
          }
        });
      }
      function checkAdvance () {
        $( "#advance", context ).focus( function () {
          $( "#advance", context ).removeClass('error');
        });
        $( "#advance", context ).focusout( function () {
          let val = $( "#advance", context ).val();
          if (val < 10 || val > 90) {
            $( "#advance", context ).addClass('error');
          }
        });
      }
      function checkMonths () {
        $( "#months", context ).focus( function () {
          $( "#months", context ).removeClass('error');
        });
        $( "#months", context ).focusout( function () {
          let val = $( "#months", context ).val();
          if (val < 3 || val > 36) {
            $( "#months", context ).addClass('error');
          }
        });
      }

      function getBank (id) {
        let val = banks[id];
        return val;
      }
    }
  };
})(jQuery, Drupal, once);
