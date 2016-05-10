$(document).ready(function(){
    $('.ryu').mouseenter(function() {
    stilltoready();
  })
  $('.ryu').mouseleave(function(){
    readytostill();
  })
  .mousedown(function(){
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
      {'left':'1020px'}, //'left':'1020px'
      500, /*time in milliseconds*/
      function(){
        $(this).hide();
        $(this).css('left','520px')
      });
    //animate hadouken to the right of the screen.
  })
  .mouseup(function(){
    throwtohide();
  });
  /*do the ryu cool pose*/
});

$(document).keydown(function(e){
    if(e.keyCode == 88){
      defaulttocool();
    }
  }).keyup(function(){
    $('.ryu-cool').hide();
    $('.ryu').show();
  });
  
function defaulttocool(){
    $('.ryu').hide();
    $('.ryu-cool').show();
};

function readytostill(){
  $('.ryu-ready').hide();
    $('.ryu-still').show();
};

function stilltoready(){
   $('.ryu-still').hide();
   $('.ryu-ready').show();
};

function throwtohide(){
   $('.ryu-throwing').hide();
   $('.ryu-ready').show();
};

function playHadouken(){
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
};






/*you can refactor this code */