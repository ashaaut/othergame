let position = 0;
let move = function() {
  let line = document.getElementById('line');
  position++;
  line.style.right = position + "px";
  checkForCollide();
  if (position > 980) {
    position = 10;
  }
}

let checkForCollide = function() {
  let lineId = document.getElementById("line");
  let boyId = document.getElementById("boy");
  let gameOver = document.getElementById("gameOver");
  let boyBottom = boyId.y;
  let lineRight = +lineId.style.right.slice(0, -2);
  if ((lineRight > 920 && boyBottom > 310)) {
    gameOver.style.visibility = "visible";
    stop();
    jump = null;
  }
}

let interval = 0;
let highScore = 0;
let startGame = function() {
  let startButton = document.getElementById("start");
  highScore = setInterval(updateScore, 1000);
  interval = setInterval(move, 5);
  startButton.onclick = null;
}

let stop = function() {
  let startButton = document.getElementById("start");
  clearInterval(interval);
  clearInterval(highScore);
  startButton.onclick = startGame;
}

let jumptime = 500;
let jumpingHeight = 150;
let jump = function(event) {
  let boy = document.getElementById("boyField")
  if (window.event.keyCode == 32) {
    boy.style.bottom = jumpingHeight + "px";
    setTimeout(function() {
      boy.style.bottom = 0 + "px";
    }, jumptime);
  }
}

let updateScore = function() {
  let score +=document.getElementById('score').innerText++;
  return score;
}
