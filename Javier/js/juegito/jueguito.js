var barra = $("#barra");
var menu = $("#menu");
var bplay = $("#Bplay");
var pelota = $("#Pelota");

var _topBarra = $('#topBarra');
var _abajoBarra = $('#abajoBarra');
var _topPelota = $('#topPelota');
var _abajoPelota = $('#abajoPelota');

var VelocidadX = 1,
    VelocidadY = 1,
    incX = 1;
var bleft = 0;
var top = 0,
    left = 0;
barra.css({
    left: bleft
});
bplay.on("click", function () {
menu.css("display", "none");

var movPelota = setInterval(function () {
    maxX = window.innerWidth;
    maxY = window.innerHeight;
    var topBarra = parseInt(barra.css('top').replace('px', ''));
    var parteBajaPelota = top + pelota.height();

    if (top <= minY) {
        VelocidadY = 1;
    } else if (top >= (maxY - pelota.height())) {
        //Rebotó abajo
        clearInterval(movPelota);
        alert('PERDISTEEEEEEE');
        //VelocidadY=-1;
    };
    if (left <= minX) {
        VelocidadX = 1;
    } else if (parteBajaPelota >= topBarra && parteBajaPelota <= topBarra + barra.height()) //150px ->150
    {
        //Están al mismo nivel...
        if ((left + pelota.width()) >= bleft && left <= (bleft + barra.width())) {
            VelocidadY = -1;
        }
    } else if (left >= (maxX - pelota.width())) {
        //Rebotó derecha...

        VelocidadX = -1;
    }

    // Rebote en barra

    pelota.css("top", top += (4 * VelocidadY));
    pelota.css("left", left += (4 * VelocidadX));

    _topPelota.css("top", top);
    _abajoPelota.css("top", top + pelota.height());

    _topBarra.css("top", topBarra);
    _abajoBarra.css("top", topBarra + barra.height());

}, 25); //fin del interval
// funcion keydown 
$(document).keydown(function (event) {
    var key = event.keyCode;
    if (key == 39 && bleft <= (maxX - barra.width())) {
        incX = 1;
        barra.css("left", bleft += 30);
    } else if (key == 37 && bleft != minX) {
        incX = -1;
        barra.css("left", bleft -= 30);
    };
    if (barra.bleft >= pelota.top) {
        VelocidadY = -1;
    } else {

    };
}); //fin del evento keydown

}); //fin del evento click
