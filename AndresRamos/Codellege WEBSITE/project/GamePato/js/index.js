var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var x = canvas.width / 2;
var y = canvas.height - 50;
var dx = 6;
var dy = -6;
var ballRadius = 10;
var maX = canvas.width;
var maY = canvas.height
var paddleHeight = 10;
var paddleWidth = 90;
var paddleX = (canvas.width / 2) - (paddleWidth / 2);
var paddleDx = 2;
var right = false;
var left = false;
var increment = 1.5;

var brickRow = 3;
var brickColumn = 8;

var brickWidth = 70;
var brickHeight = 20;

var brickPadding = 5;
var brickOffSetTop = 30;
var brickOffSetLeft = 60;

var brick = [];
var score = 0;

var lives = 3;

for (var i = 0; i <= brickRow; i++) {
    brick[i] = [];
    for (var j = 0; j <= brickColumn; j++) {
        brick[i][j] = {
            x: 0,
            y: 0,
            status: 1
        };
    }
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener('mousemove', mouseMoveHandler, false);


function keyDownHandler(ev) {

    if (ev.keyCode == 39 || ev.keyCode == 68) {
        right = true;

    } else if (ev.keyCode == 37 || ev.keyCode == 65) {
        left = true;
    }
}

function keyUpHandler(ev) {
    if (ev.keyCode == 39 || ev.keyCode == 68) {
        right = false;

    } else if (ev.keyCode == 37 || ev.keyCode == 65) {
        left = false;
    }
}

function mouseMoveHandler(ev) {
    var xMouse = ev.clientX - canvas.offsetLeft;
    if (xMouse >= 0 && xMouse <= canvas.width) {
        paddleX = xMouse - paddleWidth / 2;
    }
}

function drawBall() {
    context.beginPath();
    context.arc(x, y, ballRadius, 0, Math.PI * 2, false);
    context.fillStyle = '#2eb380';
    context.fill();
    context.closePath();
}

function drawPaddle() {
    context.beginPath();
    context.rect(paddleX, canvas.height - (paddleHeight * 2), paddleWidth, paddleHeight);
    context.fillStyle = '#f0f0f0';
    context.fill();

    context.closePath();
}

function drawBrick() {
    for (var i = 0; i <= brickRow; i++) {
        for (var j = 0; j <= brickColumn; j++) {
            if (brick[i][j].status == 1) {

                var xBrick = (j * (brickWidth + brickPadding) + brickOffSetLeft);
                var yBrick = (i * (brickHeight + brickPadding) + brickOffSetTop);
                brick[i][j].x = xBrick;
                brick[i][j].y = yBrick;
                // brick[i][j].status = 1;

                context.beginPath();
                context.rect(xBrick, yBrick, brickWidth, brickHeight);
                context.fillStyle = '#31756a';
                context.fill();
                context.closePath();
            }
        }
    }
}

function brickCollision() {

    for (var i = 0; i <= brickRow; i++) {
        for (var j = 0; j <= brickColumn; j++) {
            var b = brick[i][j];
            if (b.status == 1) {
                if ((x >= b.x && x <= (b.x + brickWidth)) && (y >= b.y && y <= b.y + brickHeight)) {
                    // console.log('Collision');
                    dy = -6;
                    b.status = 0;
                    score++;
                    if (score == (brickColumn * brickRow)) {
                        Swal.fire('You won');

                    }
                }
            }
        }
    }
}

function drawScore() {
    context.font = '20px, Arial';
    context.fillStyle = '#fff';
    context.fillText('Score: ' + score, 8, 8, 50);
}

function drawLives() {
    context.font = '20px, Arial';
    context.fillStyle = '#fff';
    context.fillText('Lives: ' + lives, maX - 50, 8, 50);
}

function draw() {
    context.clearRect(0, 0, maX, maY);
    drawBall();
    drawPaddle();
    drawBrick();
    brickCollision();
    drawScore();
    drawLives();

    if (x + ballRadius >= maX) {
        dx = -6;
    } else if (x <= 0) {
        dx = 6;
    } else if (y + ballRadius >= (maY - paddleHeight - 10)) {
        if (x > paddleX && x <= paddleX + paddleWidth) {
            dy = -6;
            paddleDx += 10;
        } else {
            lives--;
            if (lives == 0) {
                Swal.fire('Game over');
                document.location.reload();
            } else{
                x = canvas.width / 2;
                y = canvas.height - 50;
                dy = -6; 
                dx = 6;
                paddleX = (canvas.width / 2) - (paddleWidth / 2);
            }

        }
    } else if (y <= 0) {
        dy = 6;
    }

    if (right && (paddleDx < canvas.width + paddleWidth)) {
        paddleDx = 10;
        paddleX += paddleDx;
    } else if (left && (paddleX > 0)) {
        paddleDx = -10;
        paddleX += paddleDx;
    }
    // console.log (dy); 
    // console.log (dx)
    x += dx;
    y += dy;
    
    window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);
// setInterval(draw, 10);