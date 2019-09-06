var maxX = window.innerWidth;
var maxY = window.innerHeight;
var minX = 0;
var minY = 0;


$(function() {
    var ball = $("#ball");

    var top = 150;
    var left = 220;

    var incY = 1;
    var incX = 1;
    ball.css( { top: top, left: left } );


    setInterval(function(){

        maxX = window.innerWidth;
        maxY = window.innerHeight;

        if (top <= minY) {
            incY = 1;
            ball.css ({background: "blue"})
        }
        else if ( top >= ( maxY - ball.height() ) ) {
            incY = -1;
            ball.css ({background: "yellow"})

        }

        if (left <= minX) {
            incX = 1;
            ball.css ({background: "purple"})

        }
        else if ( left >= (maxX - ball.width() ) ) {
            incX = -1;
            ball.css ({background: "pink"})

        }

        ball.css("top", top+= (1 * incY));
        ball.css("left", left+= (1 * incX));
        
    }, 1)
})