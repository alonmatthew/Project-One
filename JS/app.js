var container1 = $('#container1');
var container2 = $('#container2');
var container3 = $('#container3');
var containers = [container1, container2, container3];
var main = $('#mainContainer');
var catcher = $('#catcher');

$(container2).append(catcher);

function genRandomNum(min, max) {
  return Math.round((Math.random() * (max-min)) + min);
}

$('.start').on('click', function() {
  setInterval(function() {
    new Box();
  },2000);
});

function Box() {
  var $newDiv = $('<div>');
  $newDiv.addClass('droppinDiv');
  containers[genRandomNum(0,3)].prepend($newDiv);

  setInterval(function() {
    if ($newDiv.offset().top > 700) {
      $newDiv.remove();
    } else {
      $newDiv.animate({top: "+=30"},125);
    }
  });
}

$('.moveLeft').on('click', function() {
  catcher.animate({left: "-=100"});
});

$('.moveRight').on('click', function() {
  catcher.animate({left: "+=100"});
});
