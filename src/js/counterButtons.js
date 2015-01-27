// поведение кнопок, изменяющих значения в окнах координат

var COUNTERBTN = (function () {
  var 
      // initialize input value on app start
      initInputValue = function () {
        $('.crd-window__num').each(function () {
          $(this).val(0);
        });
      },
      // create interval for valChange trigger
      createTrigger = function () {
        var
            oldValue = [0, 0];
        setInterval(function () {
          var
              newValue = [];
          $('.crd-window__num').each(function () {
            newValue.push(parseInt($(this).val()));
          });
          if (oldValue[0] !== newValue[0] || oldValue[1] !== newValue[1]) {
            $(document).trigger('valChange');
            oldValue[0] = newValue[0];
            oldValue[1] = newValue[1];
            // console.log(oldValue, newValue);
          } else {
            newValue = [];
            // console.log('not trigger ', oldValue, newValue)
          }
        }, 100);
      },
      // get button, checkout what direction it is 
      // and change appropriate window
      changeCoordValue = function (coordButton) {
        var
            direction = coordButton.hasClass('crd-arrow-list__item--up') ? 10 : -10,
            coordWindow = coordButton.closest('.generator-position-coordinates').find('.crd-window__num');

        // coordWindow.attr('value', parseInt(coordWindow.attr('value')) + direction);
        coordWindow.val(parseInt(coordWindow.val()) + direction);
      };

  return {

    init: function () {
      // initialize input value
      initInputValue();
      // put trigger on input value
      createTrigger();
      // change input value by button press
      $('.crd-arrow-list__item').on('click', function () {
        changeCoordValue($(this));
      });
    }
    
  }
})();