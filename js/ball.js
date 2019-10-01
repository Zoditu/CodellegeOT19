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

    ball.css( { top: top, left: left } );
    //console.log( ball_container.width() );

    setInterval( function(){

        //max_X = ball_container.width();
        //max_Y = ball_container.height();
        max_X = window.innerWidth;
        max_Y = window.innerHeight;

        if( top <= min_Y )
        {
            incY = 1;
            //Rebotó arriba, ahora hay que mandarlo para abajo
        } 
        else if( top >= ( max_Y - ball.height() ) )
        {
            incY = -1;
            //Rebotó abajo, ahora hay que mandarlo para arriba
        }

        if( left <= min_X )
        {
            incX = 1;
            //Rebotó en la izquierda, ahora mandarlo a la derecha
        }
        else if( left >= ( max_X - ball.width() ) )
        {
            incX = -1;
            //rebotó en la derecha, hay que mandarlo a la izquierda
        }

        ball.css( 'top', top += ( 2 * incY ) );
        ball.css( 'left', left+= ( 2 * incX ) );
    }, 1);
});