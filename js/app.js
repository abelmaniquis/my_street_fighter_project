$(document).ready(function(){
    $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  $('.ryu').mouseleave(function(){
    $('.ryu-ready').hide();
    $('.ryu-still').show();
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
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });
  /*do the ryu cool pose*/
});

$(document).keydown(function(e){
    if(e.keyCode == 88){
    $('.ryu').hide();
    $('.ryu-cool').show();
    }
  }).keyup(function(){
    $('.ryu-cool').hide();
    $('.ryu').show();
  });
  
function playHadouken(){
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}






/*you can refactor this code */