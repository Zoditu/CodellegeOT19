var maxX = window.innerWidth;
var maxY = window.innerHeight;
var minX = 0;
var minY = 0;


$(function() {
    var ball = $("#ball");
    var bar = $("#bar");

    var top = 150;
    var left = 220;
    
    var incY = 1;
    var incX = 1;

    var barH = ball.height();
    var barW = ball.width();

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
        // else if (top == barH) {
        //     incY = -1;
        // }

        if (left <= minX) {
            incX = 1;
            ball.css ({background: "purple"})

        }
        else if ( left >= (maxX - ball.width() ) ) {
            incX = -1;
            ball.css ({background: "pink"})

        }
        // else if (left == barW) {
        //     incX = -1;
        // }

        ball.css("top", top+= (2 * incY));
        ball.css("left", left+= (2 * incX));
        
    }, 1)

    if (ball.top() && ball.left() <= bar.left() && bar.top()) {
        incY = 1;
    }

})


    var bar = $("#bar");

    $(document).keydown(function(e) {
        switch (e.which) {
        //LEFT ARROW
        case 37:
                $("#bar").css('left', $("#bar").offset().left -30);
                break;
        //RIGT ARROW
        case 39:
                $("#bar").css('left', $("#bar").offset().left +30);
            break;
        }
    })