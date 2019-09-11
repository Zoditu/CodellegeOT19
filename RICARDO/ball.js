var min_X = 0;
var min_Y = 0;
var max_X = window.innerWidth;
var max_Y = window.innerHeight;

$(function(){

    var ball = $( "#ball" );
    var ball_container = $( '.ball-container' );

    var top = 150;
    var left = 220;
    
    var incX = 1;
    var incY = 1;

    var rightPressed = false;
    var leftPressed = false;
    var arriba = false;
    var abajo = false;

    ball.css( { top: top, left: left } );
    //console.log( ball_container.width() );

    setInterval( function(){

        //max_X = ball_container.width();
        //max_Y = ball_container.height();
        max_X = window.innerWidth;
        max_Y = window.innerHeight;

        if( top <= min_Y || arriba==true)
        {
            incY = 1;
            //Rebotó arriba, ahora hay que mandarlo para abajo
            ball.css('background', 'black');
        } 
        else if( top >= ( max_Y - ball.height() ) || abajo==true )
        {
            incY = -1;
            ball.css('background', 'orange');
            //Rebotó abajo, ahora hay que mandarlo para arriba
        }

        if( left <= min_X || leftPressed==true)
        {
            incX = 1;
            ball.css('background', 'red');
            //Rebotó en la izquierda, ahora mandarlo a la derecha
        }
        else if( left >= ( max_X - ball.width() ) || rightPressed==true)
        {
            incX = -1;
            ball.css('background', 'gray');
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
    else if(e.keyCode == 38) {
        arriba = true;
    }
    else if(e.keyCode == 40) {
        abajo = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
    else if(e.keyCode == 38) {
        arriba = false;
    }
    else if(e.keyCode == 40) {
        abajo = false;
    }
}
});
