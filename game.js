const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

function nextSequence() {
  let randomNumber = Math.floor(Math.random()*4);
  let randomChosenColor = buttonColors[randomNumber];
  console.log(randomChosenColor)

  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeIn(500).fadeOut(500).fadeIn(500);
  let audio = new Audio("/sounds/" + randomChosenColor + ".mp3");
  audio.play();
  };

  $(".btn").on("click", function() {
    let userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern)
  })





