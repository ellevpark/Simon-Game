

const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

  $(".btn").on("click", function() {
    let userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern)
    playSound(userChosenColor);
    animatePress(userChosenColor);
    $("#level-title").text("Level " + level);
    nextSequence();
  })

  function nextSequence() {
    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColor = buttonColors[randomNumber];
    console.log(randomChosenColor)
  
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor)
    $("#level-title").text("Level " + level++);
    };
  
function playSound(colorName) {
  let audio = new Audio("sounds/" + colorName + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed").delay(100).removeClass("pressed")
}

