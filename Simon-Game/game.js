var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userCLicked = [];
var level = 0, keyPressed = false;

$(document).keypress(function(){
  if(!keyPressed){
    $("#level-title").text("Level " + level);
    setTimeout(() => {
      nextSequence();      
    }, 500);
    keyPressed = true;
  }
})
$(".btn").click(function(){
  var clickedButton = $(this).attr("id");
  userCLicked.push(clickedButton);
  playSound(clickedButton);
  animatePress(clickedButton);
  checkAnswer(userCLicked.length-1);
})
function checkAnswer(key){
  if(userCLicked[key] === gamePattern[key]){
    if(userCLicked.length === gamePattern.length){
      setTimeout(function(){
        nextSequence();
      }, 1000);
    }
  }else{
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart")
    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 200);
    strtOver();
  }
}
function nextSequence(){
  userCLicked= [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor((Math.random()*4));
  var colorChosen = buttonColors[randomNumber];
  gamePattern.push(colorChosen);
  $("#"+colorChosen).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(colorChosen);
}
function strtOver(){
  gamePattern = [];
  userCLicked = [];
  level = 0;
  keyPressed = false;
}
function animatePress(key){
  $("#"+key).addClass("pressed");
    setTimeout(function(){
    $("#"+key).removeClass("pressed");
  },100);
}
function playSound(key){
  var audio = new Audio("sounds/"+key+".mp3");
  audio.play();
}