var container1 = $('#container1');
var container2 = $('#container2');
var container3 = $('#container3');
var containers = [container1, container2, container3];

function genRandomNum(min, max) {
  return Math.round((Math.random() * (max-min)) + min);
}

$('button').on('click', function() {
  setInterval(function() {
    new Box();
  },2000);
});

function Box() {
  var $newDiv = $('<div>');
  $newDiv.addClass('droppinDiv');
  containers[genRandomNum(0,3)].prepend($newDiv);

  setInterval(function() {
      $newDiv.animate({top: "+=30"},100);
  });
}
