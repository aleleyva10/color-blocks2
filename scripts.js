$(onReady);

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
  }

  function rgbValue() {
    var r = randomNumber(0, 255);
    var g = randomNumber(0, 255);
    var b = randomNumber(0, 255);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }


  var deleteBoxCircle = function() {
    $(this).parent().remove();
    console.log('deleted box or circle');
  };


  var addBlock = function() {
    var $block = ('<div style="background-color: ' + rgbValue() + '"></div>');
    $('.blocks').append($block);
  };

  var addCircle = function() {
    var $circle = ('<div style="background-color: ' + rgbValue() + '"></div>');
    $('.circles').append($circle);
  };


  function onReady() {
    $('#blockButton').on("click", addBlock);
    $('#circleButton').on("click", addCircle);
    $('main').on('click', deleteBoxCircle);
  }
