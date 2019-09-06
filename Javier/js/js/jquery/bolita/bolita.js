var maxX = window.outerWidth;
var maxY = window.outherHeight;
var minX = 0;
var minX = 0;

//posicion del cuadro


// funcion para que se mueva
$(function(){
    var ball = $("#ball");
    var top = 0;
    var left = 0;
    setInterval(function(){
        ball.css('top', top+=2);
        ball.css('left', left+=2);
    },100)
})
// setInterval(function(){
//     $("#title").append('a');
// }, 1000);