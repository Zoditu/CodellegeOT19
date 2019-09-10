
var maxX=window.innerWidth;
var maxY=window.innerHeight;
var minX= 0;
var minY= 0;    



$(function()
{  
var left= 0;
var top= 0;
var pelota= $("#pelota");
var incY= 1;
var incX=1;
pelota.css({top: top, left: left})

setInterval(function(){
maxX= window.innerWidth;
maxY= window.innerHeight;
if(top<=minY){
incY= 1;
pelota.css( "background","red");
}else if(top>= (maxY - pelota.height()))
{
incY=-1;
pelota.css( "background","blue");
}
if(left<= minX){
    incX=1;
    pelota.css( "background","orange");

}else if(left>= (maxX- pelota.height())){
incX=-1;
pelota.css( "background","yellow");
}
pelota.css({
    top: top+= (2 * incY),
    left: left+=(2 * incX),
})
},10);

});