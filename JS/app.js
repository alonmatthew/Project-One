var container1 = $('#container1');
var container2 = $('#container2');
var container3 = $('#container3');
var containers = [container1, container2, container3];

function genRandomNum(min, max) {
  return Math.round((Math.random() * (max-min)) + min);
}

function Box(top) {
  this.top = top;
  var $newDiv = $('<div>');
  $newDiv.addClass('droppinDiv');
  containers[genRandomNum(0,3)].append($newDiv);
  $newDiv.animate({
    top: 0,
    left: 0
  })
}





$('button').on('click', function() {
  new Box(0);
});
