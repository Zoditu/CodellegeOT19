var canvas = document.getElementById("myCanvas");
//variable de regla para indicar el tipo de juego (2D)
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height -30;
var ballRadius = 10;

var Win = false;
var Loose = false;


//pelota
var dx = 2;
var dy = -2;

//barrita
var paddleHeight = 15;
var paddleWidth = 150;
var paddleX = (canvas.width - paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;

//bricks
var brickRowCount = 4;
var brickColumnCount = 10;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffSetTop = 30;
var brickOffsetLeft = 30;
var bricks = [];
var score = 0;
var lives = 3;

for( c=0; c < brickColumnCount; c++ ){
    bricks [c] = [];
    for( r=0; r < brickRowCount; r++ ){
        bricks[c][r] = {x:0, y:0, status:1};
    }
}

/*Swal.fire('RESULTADO!?').then( function( result ){
    if( result.value )
    {
        alert( 'Se cerró del botón OK' );
    }
    else if( result.dismiss )
    {
        if( result.dismiss === 'esc' )
            alert( 'Presionaste la teclas ESC' );
        else if( result.dismiss === 'backdrop' )
            alert( 'Picaste fuera del mensaje' );
    }
});
*/


// ctx.beginPath();
// ctx.rect(90, 90, 50, 50);
// ctx.fillStyle = "#ADFFC5";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.rect(150, 150, 150, 20);
// ctx.strokeStyle = "#ADFFC5";
// ctx.stroke();
// ctx.closePath();

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function keyDownHandler(e){
    if(e.keyCode == 68 || e.keyCode == 39){
        rightPressed = true;
    }
    if(e.keyCode == 65 || e.keyCode == 37){
        leftPressed = true;
    }
}

function keyUpHandler(e){
    if(e.keyCode == 68 || e.keyCode == 39){
        rightPressed = false;
    }
    if(e.keyCode == 65 || e.keyCode == 37){
        leftPressed = false;
    }
}

function mouseMoveHandler(e){
    var relativeX = e.clientX - canvas.offsetLeft;
    if( relativeX > 0 && relativeX < canvas.width ){
        paddleX = relativeX - paddleWidth/2;    
    }
}

function drawBall(){
    ctx.beginPath();
    //Pelotita
    ctx.arc(x, y, ballRadius, 0, Math.PI*2, false);
    ctx.fillStyle = "#E8D692";
    ctx.fill();
    ctx.closePath();    
}

function drawPaddle(){
    ctx.beginPath();
    //Barrita de abajo
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#ADFFC5";
    ctx.fill();
    ctx.closePath();
}

function drawBricks(){
    for( c=0; c<brickColumnCount; c++ ){
        for( r=0; r<brickRowCount; r++){
            if(bricks[c][r].status == 1){
                var brickX = ( c * (brickWidth + brickPadding) ) + brickOffsetLeft;
                var brickY = ( r * (brickHeight + brickPadding) ) + brickOffSetTop;
                bricks [c][r].x = brickX;
                bricks [c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = '#FFC07D';
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function collitionDetection(){
    //if( score == brickRowCount*brickColumnCount ){
    if( score++ == 0 ){
        Win = true;
        Swal.fire({
            title: 'Este es el título',
            html: 'Name: <input id="swal">',
            type: 'info',
            showCancelButton: true,
            confirmButtonText: 'Yay! De nuevo',
            cancelButtonText: 'Ya no seguirrrrr, papaya de celayaaaa'
        }).then( function( result ){
            if( result.value )
            {
                //Continuar con el juego
                var swal = $('#swal2-content');

                Win = false;
                Loose = false;
                window.requestAnimationFrame( draw );
            }
            else if( result.dismiss === 'cancel' )
            {
                //Ya no seguir con el juego
                Win = true;
            }

            console.log( result );
        });
    }

    for( c=0; c<brickColumnCount; c++ ){
        for( r=0; r<brickRowCount; r++ ){
            var b = bricks [c][r];
            if( b.status == 1){
                if( x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight){
                    dy = -dy;
                    b.status = 0;
                    score++;
                    // console.log(" collition ")                    
                }
            } 
        }
    }
}

function drawScore(){
    ctx.font = "20px, Arial";
    ctx.fillStyle = "#FFF";
    ctx.fillText("SCORE: " + score, 8, 20);
}

function drawLives(){
    ctx.font = "20px, Arial";
    ctx.fillStyle = "red";
    ctx.fillText("LIVES: " + lives, canvas.width - 65, 20);
}

function draw(){
    if( Win || Loose )
    {
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    drawBricks()
    collitionDetection();
    drawScore();
    drawLives();
    if(x + dx > canvas.width - ballRadius || x + dx < ballRadius){
        dx = -dx;
    } 
    if(y + dy < ballRadius){
        dy = -dy;
    }
    else if(y + dy > canvas.height - ballRadius){
        if( x > paddleX && x < paddleX + paddleWidth){
            dy = -dy
        } else{  
            lives--;    
            if(!lives){                      
            Swal.fire('GAME OVER!')
            document.location.reload();
            } else{
                x = canvas.width/2;
                y = canvas.height-30;
                dx = 3;
                dy = 3;
                paddleX = (canvas.width-paddleWidth)/2;
            }
        }        
    }
    if( rightPressed && paddleX < canvas.width - paddleWidth ){
        paddleX += 7;
    } else if( leftPressed && paddleX > 0 ) {
        paddleX -=7
    }

    //Movimiento pelota
    x += dx;
    y += dy;
    window.requestAnimationFrame( draw );
}

//setInterval(draw, 10);
window.requestAnimationFrame( draw );


/**
 * Buscar funciones de canvas
 * 
 */