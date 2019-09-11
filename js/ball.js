var min_X = 0;
var min_Y = 0;
var max_X = window.innerWidth;
var max_Y = window.innerHeight;

// var rightPressed = false;
// var leftPressed = false;

$(function(){

    var ball = $( "#ball" );
    var ball_container = $( '.ball-container' );

    var top = 150;
    var left = 220;
    
    var incX = 1;
    var incY = 1;

    var rightPressed = false;
    var leftPressed = false;
    var upPressed = false;
    var downPressed = false;

    ball.css( { top: top, left: left } );
    //console.log( ball_container.width() );

    setInterval( function(){

        //max_X = ball_container.width();
        //max_Y = ball_container.height();
        max_X = window.innerWidth;
        max_Y = window.innerHeight;

        if( (top <= min_Y) || upPressed == true )
        {
            incY = 1;
            ball.css( {background:'linear-gradient(to bottom left, #ccffff 0%, #ff99cc 100%)'} );
            //Rebotó arriba, ahora hay que mandarlo para abajo
        } 
        else if( ( top >= ( max_Y - ball.height() ) ) || downPressed == true )
        {
            incY = -1;
            ball.css( {background:'linear-gradient(to bottom left, #ff9966 0%, #00cc99 100%)'} );
            //Rebotó abajo, ahora hay que mandarlo para arriba
        }

        if( (left <= min_X ) || leftPressed == true)
        {
            ball.css( {background:'linear-gradient(to bottom left, #33cc33 0%, #ff00ff 100%)'} );
            incX = 1;
            //Rebotó en la izquierda, ahora mandarlo a la derecha
        }
        else if( left >= ( max_X - ball.width() ) || rightPressed == true )
        {
            incX = -1;
            ball.css( {background:'linear-gradient(to bottom left, #0066cc 0%, #993300 100%)'} );
            //rebotó en la derecha, hay que mandarlo a la izquierda
        }

        ball.css( 'top', top += ( 2 * incY ) );
        ball.css( 'left', left+= ( 2 * incX ) );
    }, 1);


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
    else if(e.keyCode == 38){
        upPressed = true;
    } 
    else if(e.keyCode == 40){
        downPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
    else if(e.keyCode == 38){
        upPressed = false;
    } 
    else if(e.keyCode == 40){
        downPressed = false;
    }
}

});