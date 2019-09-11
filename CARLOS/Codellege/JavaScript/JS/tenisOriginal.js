
var maxX= window.innerWidth,
    maxY= window.innerHeight,
    minX= 0,
    minY=0;
    
$(function()
{
    var barra = $("#barra");
    var menu= $("#menu");
    var bplay = $("#Bplay");
    var pelota=$("#Pelota");
    var VelocidadX=1, VelocidadY=1, incX=1;
    var bleft=0;   
    var top =0, left=0;
    barra.css({left: bleft});
    bplay.on("click",function(){
        menu.css("display","none");
            setInterval(function(){
                maxX= window.innerWidth;
                maxY= window.innerHeight;
                if(top<=minY){
                VelocidadY=1;
                }else if(top>=(maxY- pelota.height())){
                    VelocidadY=-1;
                };
                if(left<=minX){
                    VelocidadX=1;
                }else if(left>=(maxX - pelota.width())){
                    VelocidadX=-1;
                }
                
             
                pelota.css("top", top+=(4* VelocidadY));
                pelota.css("left",left+=(4* VelocidadX));
            
            },10);//fin del interval
        // funcion keydown 
        $(document).keydown(function(event){
            var key = event.keyCode; 
            if(key == 39 && bleft<=(maxX-barra.width())){
                incX= 1;
                barra.css("left", bleft+=(100*incX));
            }else if(key == 37&& bleft!= minX){
                incX= -1;
                barra.css("left", bleft+=(100*incX))
        };    
          
        });//fin del evento keydown

    });//fin del evento click
 });//Fin del onloand de jq

 //fin del evento keydown
        // document.addEventListener("Keyup", (event ),false);
        // document.addEventListener("keydown", (event) =>
        // function keyDownHandler(e){
        //     if(e.keycode== 39){
        //         MovDerecha=true;
        //     }else if(e.keycode== 37){
        //         MovIzquerda= true;
        //     }
        // }

        // function keyUpHandler(e){
        //     if(e.keycode== 39){
        //         MovDerecha=false;
        //     }else if(e.keycode== 37){
        //         MovIzquerda= false;
        //     }
        // }