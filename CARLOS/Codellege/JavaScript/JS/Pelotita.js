
var maxX=innerWidth;
var maxY=innerHeight;
var minX= 0;
var minY= 0;    
var pelota= {
    Movimiento: setInterval(function(){
    rigth: 50;
    bottom: 50;
    },50)
}


$(function()
{
$("#pelota").on(pelota.Movimiento);
});