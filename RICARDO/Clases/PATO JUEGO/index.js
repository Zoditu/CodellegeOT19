var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var ballRadius = 10;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 3;
var brickColumnCount = 9;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffSetTop = 30;
var brickOffSetLeft = 30;
var bricks = []; 
var score = 0;
var lives = 3;
for (c = 0; c<brickColumnCount; c++)
{
    bricks [c] = []
    for (r=0; r<brickRowCount; r++)
    bricks[c][r] = { x:0, y:0, status: 1 };
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function keyDownHandler(e)
{
    if(e.keyCode == 39)
    {
        rightPressed = true;
    }
    else if (e.keyCode == 37)
    {
        leftPressed = true;
    }
}

function keyUpHandler(e)
{
    if(e.keyCode == 39)
    {
        rightPressed = false;
    }
    else if (e.keyCode == 37)
    {
        leftPressed = false;
    }
}

// ctx.beginPath();
// ctx.rect(90, 90, 50, 50)
// ctx.fillStyle = "FF0000";
// ctx.fill();
// ctx.closePath();
function mouseMoveHandler(e)
{
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width)
    {
        paddleX = relativeX - paddleWidth/2;
    }
}
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2, false)
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function drawBricks() {
    for ( c=0; c< brickColumnCount; c++)
    {
        for( r=0; r<brickRowCount; r++)
        {
            if (bricks[c][r].status == 1)
            {
            var brickX = (c * (brickWidth + brickPadding)) + brickOffSetLeft;
            var brickY = (r * (brickHeight + brickPadding)) + brickOffSetTop;
            bricks [c][r].x = brickX;
            bricks [c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight)
            ctx.fillStyle = "green";
            ctx.fill();
            ctx.closePath();
            }
        }
    }

}

function collisionDetection(){
    for (c=0; c < brickColumnCount; c++)
    {
        for(r=0; r < brickRowCount; r++)
        {
            var b = bricks [c][r];
            if(b.status == 1)
            {
                if(x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight)
                {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if (score == brickRowCount * brickColumnCount)
                    {
                        Swal.fire("You Won, Congratulations!!");
                        document.location.reload();
                    }
                }
            }
        }
    }
}

function drawScore(){
    ctx.font = "40px, Arial";
    ctx.fillStyle = "red";
    ctx.fillText("Score: " + score, 8, 20);
}

function drawLives(){
    ctx.font = "40px, Arial";
    ctx.fillStyle = "red";
    ctx.fillText("Lives: " + lives, canvas.width-65, 20);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawBall();
    drawPaddle();
    drawBricks();
    collisionDetection();
    drawScore();
    drawLives();
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy < ballRadius) {
        dy = -dy;
    }
    else if(y + dy > canvas.height-ballRadius)
    {
        if(x > paddleX && x < paddleX + paddleWidth)
        {
            dy = -dy;
        }
        else
        {
        lives--;
        if(!lives)
        {
        Swal.fire("GAME OVER");
        document.location.reload();
        }
        else{
            x = canvas.width/2;
            y = canvas.height-30;
            dx = 3;
            dy = -3;
            paddleX = (canvas.width-paddleWidth)/2;
        }
        }
    }

    if (rightPressed && paddleX < canvas.width - paddleWidth) 
    {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0)
    {
        paddleX -= 7;
    }


    x += dx;
    y += dy;
}


setInterval(draw, 10)



// ctx.beginPath();
// ctx.rect(100, 90, 50, 20)
// ctx.strokeStyle = "rgba (0,0, 250, 0.5)";
// ctx.stroke();
// ctx.closePath();