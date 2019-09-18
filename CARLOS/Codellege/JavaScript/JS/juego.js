var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var ballradius = 5;

var brickRowCount = 3;
var brickColumnCount =5;
var brickWidth = 45;
var brickHeight =10;
var brickPadding=10;
var brickOffSetTop=15;
var brickOffSetLeft=15;
var bricks=[];
var score=0;
var lives=3;

for(c=0; c<brickColumnCount; c++){
    bricks [c]= [];
    for (r= 0; r< brickRowCount; r++){
        bricks [c] [r] ={x:0, y:0,status: 1};
    }
}

//Aqui es para haer que se mueva con las teclas 
var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown",keyDownHandler, false)
document.addEventListener("keyup",keyUpHandler, false)
document.addEventListener("mousemove",mouseMoveHandler,false);

function mouseMoveHandler(e){
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX >0 && relativeX< canvas.width){
        paddleX = relativeX - paddleWidth/2;

    }
}
function keyDownHandler(e)
{
    if(e.keyCode == 39)
    {
        rightPressed=true;
    }
    if(e.keyCode== 37)
    {
        leftPressed=true;

    }
}

function keyUpHandler(e)
{
    if(e.keyCode === 39)
    {
        rightPressed=false;
    }
    if(e.keyCode== 37)
    {
        leftPressed=false;

    }
}





//Aqui se comineza a hacer la barrita que se mueve para los  lados 

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth ) /2;
function drawPaddel() {  
    ctx.beginPath();
    ctx.rect(paddleX,canvas.height - paddleHeight,  paddleWidth,paddleHeight);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}

//----------------------------
function drawBricks()
{
    for (c=0; c < brickColumnCount; c++){
        for(r=0; r< brickRowCount; r++){
            if(bricks[c][r].status == 1)
            {
                var brickX= (c*(brickWidth + brickPadding  ))+ brickOffSetLeft;
                var brickY= (r*(brickHeight + brickPadding  ))+ brickOffSetTop;
    
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX,brickY, brickWidth, brickHeight);
                ctx.fillStyle="#E45FFD";
                ctx.fill();
                ctx.closePath();
            }
           

        }
    }
}
//-------------------------------------------------------------------------------

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballradius, 0, Math.PI * 2, false)
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
    // x+= dx;
    // y += dy;  esto hace que se mueva
}
function drawScore(){
    ctx.font="20px","Arial";
    ctx.fillStyle= "#0095DD";
    ctx.fillText("Score: "+score, 4,10);
}
function drawlives(){
    ctx.font="20px","Arial";
    ctx.fillStyle= "#0095DD";
    ctx.fillText("Lives: "+lives ,canvas.width -65,10);
}
function collitionDetection()
{
    for (c=0; c< brickColumnCount; c++){
        for(r=0; r< brickRowCount; r++){
            var b = bricks[c][r];
            if(b.status == 1){
                if(x> b.x && x < b.x + brickWidth && y > b.y && y<b.y + brickHeight)
                {
                    dy= -dy;
                    b.status=0;
                    score ++;
                    if(score== brickRowCount* brickColumnCount){
                       
                        Swal.fire("you are de best fucking gamer in the world");
                        document.location.reload();
                    }
                }
            }
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawBall();
    drawPaddel();
    drawBricks();
    collitionDetection();
    drawScore();
    drawlives()
    
    if (x + dx > canvas.width - ballradius || x + dx < ballradius) {
        dx = -dx;
    }
    if (y + dy < ballradius) {
        dy = -dy;
    }
    else if (y +dy > canvas.height- ballradius)
    {
        if (x > paddleX && x <paddleX + paddleWidth)
        {
            dy=-dy;

        }
        else {  
            lives --;
            if(!lives){
            Swal.fire('Any fool can use a computer');
            then()=> {
                document.location.reload();
            }
            
            }
            else{
                x= canvas.width/2;
                y= canvas.height-30;
                dx=3;
                dy=3;
                paddleX=(canvas.width-paddleWidth);
            }

            
      
    }
    }
   

    //esto es para que se pueda mover la plataforma  y que no se salga del canvas 
    if (rightPressed  && paddleX < canvas.width -paddleWidth )
    {
        paddleX +=8
    }
    else if( leftPressed &&  paddleX  > 0)
    {
        paddleX -= 8;
    }




    x += dx;
    y += dy;

}

setInterval(draw, 10)

// ctx.beginPath();
// ctx.rect(90, 90,50,50);
// ctx.fillStyle ="green";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.rect(100,90,50,20);
// ctx.strokeStyle ="grey";
// ctx.stroke();
// ctx.closePath();



// var canvas = document.getElementById("mycanvas");
// var ctx = canvas.getContext("2d");
// var x = canvas.width / 2;
// var y = canvas.height - 30;
// var dx = 2;
// var dy = -2;
// var ballRadius = 5;
// var paddleHeigth = 5;
// var  paddleWidth = 35;
// var  paddleX = (canvas.width - paddleWidth) / 2;
// var rigthPresed= false;
// var leftPressed= false;
// var brickRowCount= 3;
// var brickColumnCount= 5;
// var brickWidth= 15;
// var brickHeight= 10;
// var brickPadding = 10;
// var brickOffSetTop=15;
// var brickOffSetleft=15; 
// var bricks= [];

// for(i=0;i<brickColumnCount;i++){
// bricks[i]=[];
// for(r=0;r<brickRowCount; r++){
//     bricks [i][r]= {x: 0,y:0};
// }
// }
// function collitionDetection(){
//     for(i=0; i<brickColumnCount; i++){
//         for(r=0; r<brickRowCount; r++){
//             var b= bricks[i][r];
//             if(b.status==1){
//                 if(x> b.x && x< b.x + brickWidth && y>b.y && y<b.y + brickHeight){
//                     dy =-dy;
//                     b.status=0;
//                 }
//             }
//         }
//     }
// }
// document.addEventListener("keydown", keyDownHandler,false);
// document.addEventListener("keyup", keyUpHandler,false);

// function keyDownHandler(e){
//     if( e.keyCode==39){
//         rigthPresed= true;
//     }
//     if(e.keyCode==37){
//         leftPressed= true;
//     }
// }
// function keyUpHandler(e){
//     if (e.keyCode== 39){
//         rigthPresed= false;
//     }
//     if(e.keyCode==37){
//         leftPressed=false;
//     }
// }



// function drawPaddle() {
//     ctx.beginPath();
//     ctx.rect(paddleX, canvas.height - paddleHeigth, paddleWidth, paddleHeigth);
//     ctx.fillStyle = "black";
//     ctx.fill();
//     ctx.closePath();
// }

// function drawball() {
//     //circulo
//     ctx.beginPath();
//     ctx.arc(x, y, ballRadius, 0, Math.PI * 2, false); //crear circulo
//     ctx.fillStyle = "skyblue";
//     ctx.fill(); //mostrar objecto en el canvas 
//     //indicar qeu terminamos nuestra figura
//     ctx.closePath();
// };

// function drawBricks(){
//     //for para indicar el numero de columnas 
//     for( var i=0; i<brickColumnCount;i++){
//     for(var r=0; r<brickRowCount;r++){
//         if(bricks[i][r].status== 1){
//         var brickX=(i * (brickWidth + brickPadding))+brickOffSetleft;
//         var brickY=(r * (brickHeight + brickPadding))+brickOffSetTop;
//         bricks[i][r].x=brickX;
//         bricks[i][r].y=brickY;
//         ctx.beginPath();
//         ctx.rect(brickX,brickY,brickWidth,brickHeight);
//         ctx.fillStyle=("skyblue");
//         ctx.fill();
//         ctx.closePath();

//         }
        
//     }//fin del for para filas
//     }//fin del for 
// }


// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawball();
//     drawPaddle();
//     drawBricks();
//     collitionDetection();
//     if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
//         dx = -dx;
//     }
//     if (y + dy < ballRadius) {
//         dy = -dy;
//     }else if (y+dy > canvas.height-ballRadius){
//         if(x> paddleX && x< paddleX +paddleWidth){
//              dy = -dy;
//         }else {
            
//             document.location.reload();
//         }

//     }

//     if(rigthPresed && paddleX < canvas.width -paddleWidth){
//         paddleX+=7;
//     }else if(leftPressed && paddleX >0){
//         paddleX+=-7;
//     }
//     x += dx;
//     y += dy;

    
// }
// setInterval(draw, 10);
//ctx.beginPath();
/// ctx.rect(9,9,15,15);
// ctx.fillStyle="black";
// ctx.fill();
// //indicar qeu terminamos nuestra figura
// ctx.closePath();



// ctx.beginPath();
// ctx.rect(90,90,35,20);
// ctx.strokeStyle="rgba(0,0,250,0.5)";//mostrar la figura sin fondo
// ctx.stroke();//mostrar el stroke
// //indicar qeu terminamos nuestra figura
// ctx.closePath();