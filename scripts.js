console.log('jQuery sourced');

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

var addCircle = function() {
  var $block = ('<div style="background-color:' + rgbValue() + '"></div>');
  $('main').append($block);
  updateCounters();
};


var deleteCircle = function() {
  console.log('deleted circle');
  $(this).remove();
  updateCounters();
};


var updateCounters = function() {
  console.log('in updateCounters');

  $('#circles').text($('div').length);

};

function onReady() {
  $('button').on('click', addCircle);
  $('main').on('click', 'div', deleteCircle);
}
