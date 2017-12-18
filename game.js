let gameObject = {
  position: 0,
  interval: 0,
  highScore: 0,
  jumptime: 500,
  jumpingHeight: 150,
}

let moveBarrier = function() {
  let line = document.getElementById('line');
  gameObject.position++;
  line.style.right = gameObject.position + "px";
  checkForCollision();
  if (gameObject.position > 980) {
    gameObject.position = 10;
  }
}

let checkForCollision = function() {
  let lineId = document.getElementById("line");
  let boyId = document.getElementById("boy");
  let gameOver = document.getElementById("gameOver");
  let lineRight = +lineId.style.right.slice(0, -2);
  if ((lineRight > 920 && boyId.y > 310)) {
    gameOver.style.visibility = "visible";
    stopGame();
    jump = null;
  }
}

let startGame = function() {
  let startButton = document.getElementById("start");
  gameObject.highScore = setInterval(updateScore, 1000);
  gameObject.interval = setInterval(moveBarrier, 5);
  startButton.onclick = null;
}

let stopGame = function() {
  let startButton = document.getElementById("start");
  clearInterval(gameObject.interval);
  clearInterval(gameObject.highScore);
  startButton.onclick = startGame;
}

let jump = function() {
  let boy = document.getElementById("boyField")
  if (window.event.keyCode == 32) {
    boy.style.bottom = gameObject.jumpingHeight + "px";
    setTimeout(function() {
      boy.style.bottom = 0 + "px";
    }, gameObject.jumptime);
  }
}

let updateScore = function() {
  let score = document.getElementById('score').innerText++;
  return score;
}
