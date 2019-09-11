var min_X = 0;
var min_Y = 0;
var max_X = window.innerWidth;
var max_Y = window.innerHeight;
var rightPressed = false;
var leftPressed = false;

//function sobre la bolita
$(function(){

    var ball = $( "#ball" );
    var bar = $( "#barrita" );
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

     var timer = setInterval( function(){
        max_X = window.innerWidth;
        max_Y = window.innerHeight;

        if( (top <= min_Y))
        {
            incY = 1;
        } 
        else if( ( top >= ( max_Y - ball.height() ) ) )
        {
            incY = -1;
        }
        if( (left <= min_X ))
        {
            incX = 1;
        }
        else if(MediaStreamAudioDestinationNode){
            incY = 1;
        }
        else if( left >= ( max_X - ball.width() ) )
        {
            incX = -1;
        }
            ball.css( 'top', top += ( 2 * incY ) );
            ball.css( 'left', left+= ( 2 * incX ) );
    }, 5);


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

//function sobre la barra
$(function(){

        var bar = $( "#barrita" );
        var left = 0;        
        var incX = 1;
        var rightPressed = false;
        var leftPressed = false;
        // bar.css( { top: top, left: left } );

        setInterval( function(){
            max_X = window.innerWidth;
            max_Y = window.innerHeight;
            if( (left <= min_X ) || rightPressed == true)
            {
                incX = 1;
            }
            else if( left >= ( max_X - bar.width() ) || leftPressed == true )
            {
                incX = -1;
            }
            bar.css( 'left', left+= ( 2 * incX ) );
        }, 1);


    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    function keyDownHandler(e) {
        if(e.keyCode == 39 || e.keyCode == 68 ) {
            rightPressed = true;
        }
        else if(e.keyCode == 37 || e.keyCode == 65) {
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
        if(e.keyCode == 39 || e.keyCode == 68) {
            rightPressed = false;
        }
        else if(e.keyCode == 37 || e.keyCode == 65) {
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

//function del juego by Mozilla
