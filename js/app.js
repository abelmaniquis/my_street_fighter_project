$(document).ready(readyfunction);


function readyfunction(){
  
  var ryu = $('.ryu');
  
  ryu.mouseenter(function(){
    stilltoready();
  })
  ryu.mouseleave(function(){
    readytostill();
  })
  .mousedown(function(){
    playHadouken();
    readytothrowing();
    hadoukenBehavior();
    //animate hadouken to the right of the screen.
  })
  .mouseup(function(){
    throwtohide();
  });
  /*do the ryu cool pose*/
}


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

function readytothrowing(){
  $('.ryu-ready').hide();
  $('.ryu-throwing').show();
};

function hadoukenBehavior(){
  $('.hadouken').finish().show().animate(
      {'left':'75em'}, //'left':'1020px'
      750, /*time in milliseconds*/
      function(){
        $(this).hide();
        $(this).css('left','520px')
  });
}

function playHadouken(){
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
};






/*you can refactor this code */