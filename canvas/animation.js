let canvas = document.getElementById("my_canvas");
let context = canvas.getContext("2d");

const speed = 10;
let position = 100;
let moveSpeed = speed;
let radius = 50;

function moveBall() {
  if (position + radius > 1000) {
    moveSpeed = -speed;
  } else if (position - radius < 0) {
    moveSpeed = speed;
  }
  position += moveSpeed;
}

function drawBall() {
  context.clearRect(0, 0, 1000, 480);

  context.fillStyle = "#62687f";
  context.beginPath();
  context.arc(position, 50, radius, 0, 2 * Math.PI);
  context.fill();
}

function animate() {
  moveBall();
  drawBall();
  window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);
