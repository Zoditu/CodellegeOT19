var maxHeight = window.innerHeight;
var maxWidth = window.innerWidth;
var minHeight = 0; 
var minWidth = 0;

$(function(){
    var ball = $('#ball');
    var platform = $('#platform');

    var top = 0; 
    var left = 0; 
    ball.css({top: top, left: left});
    var speedX = 1; 
    var speedY = 1; 

    var platformLeft = 0; 
    var platformSpeed = 1; 
    
    var ballRight = 0;
    var ballBottom = 0; 

    $(document).keypress(function(event){
        
        var key = event.keyCode || event.which; 
        var keyChar = String.fromCharCode(key);
        console.log(keyChar);
        if (keyChar == 'd' || keyChar == '\''){
            platformSpeed = 1; 
            if ((platform.width() + platformLeft) >= maxWidth ){
            }
            else{
                platform.css({left: platformLeft += (50 * platformSpeed)});
            }
        }
        else if (keyChar == 'a' || keyChar == '%'){
            platformSpeed = -1;
            
            if (platformLeft <= minWidth ){
            }
            else{
                platform.css({left: platformLeft += (50 * platformSpeed)});
            }
        }
    });  

    setInterval(function(){
        maxHeight = window.innerHeight;
        maxWidth = window.innerWidth;

        platformXLeft = platformLeft;
        platformXRight = platformLeft + platform.width();
        platformY = platform.css("top").toString().replace('px','') ;
        platformY2 = platformY + platform.height();

        ballRight = left + ball.width();
        ballBottom = top + ball.height();
        
        // console.log(ballBottom <= platformY2);
        if ((ballBottom >= platformY)){
            if((left >= platformXLeft && ballRight <= platformXRight)){
                speedY = -1;
            }
            if (top <= minHeight)
            {
                speedY = 1;
            }
        }
        else if (top <= minHeight)
        {
            speedY = 1;
        }

        if (top >= (maxHeight - ball.height())){
            top = 0; 
            left = 0;
            speedY = -1;
        }
        if (left >= (maxWidth - ball.width()) )
        {
            // console.log('Go right!');
            speedX = -1; 
        }
        else if (left <= minWidth)
        {
            // console.log('Go left!');
            speedX = 1;
        }
        
        //ball.css({top: top += (10*speedY), left: left=30});
        ball.css({top: top += (10*speedY), left: left+= (10*speedX)});
        
    }, 10);
})


