var container1 = $('#container1');
var container2 = $('#container2');
var container3 = $('#container3');
var containers = [container1, container2, container3];
var main = $('#mainContainer');
var catcher = $('#catcher');
var score = 0;
var scoreboard = $('h1');

$(container2).append(catcher);

function genRandomNum(min, max) {
  return Math.round((Math.random() * (max-min)) + min);
}

// creates divs that drop down
function Box() {
  var $newDiv = $('<div>');
  $newDiv.addClass('droppinDiv');
  $(containers[genRandomNum(0,3)]).prepend($newDiv);

  setInterval(function() {
    if ($newDiv.offset().top > 725) {
      if(collision(catcher, $newDiv)){
        // todo if it does height
        score += 1;
        console.log("hit!");
      }
      else {
        // todo if doesnt hit
        score -= 1;
        console.log("missed!");
      }
      scoreboard.text("Score: " + score);

      $newDiv.remove();
    } else {
      $newDiv.css('top', '+=1');
    }
  }, 10);
}

var $droppedDiv = $('.droppinDiv');

$('.start').on('click', function() {
  alert("Get Ready!");
  setInterval(function() {
    new Box();
  },2000);
});

$('.moveLeft').on('click', function() {
  catcher.animate({left: "-=102"});
});

$('.moveRight').on('click', function() {
  catcher.animate({left: "+=102"});
});

function collision(catcher, $droppedDiv) {
      var x1 = catcher.offset().left;
      var y1 = catcher.offset().top;
      var h1 = catcher.outerHeight(true);
      var w1 = catcher.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $droppedDiv.offset().left;
      var y2 = $droppedDiv.offset().top;
      var h2 = $droppedDiv.outerHeight(true);
      var w2 = $droppedDiv.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;

      return !(b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2);
}
