//hacer una peticion ala BD (mi documento de mis libros)
var books =require("../JSON/books.json");
//metodo para administrar los endpoit
// var URL =require("../node_modules/url_parse");
//importar la clase librery
var libreria= require("./endpoints/Librery");
//crear constructor de la clase librery o instanciar la clase librery
var CodeBook= new libreria(books);
//express para nodejs
//importar express
var express=require("express");
//Instanciar el metodo express
var app= express();

//crear un servidor con express
//crear el primer eandpoint con dos parametros el endpoint y una funcion
app.get("/Librery/search",(req,res)=>{
    console.log(req._parsedURL);
    var datos = URL ( req.url, true );    
    var ENDPOINT = req._parsedUrl.pathname;
    var PARAMS = datos.query;     
    var METHOD= req.method;
    var STATUS= 200;
    var RESULT = {};
    var result = CodeBook.Search(PARAMS);
    RESULT = result.RESULT;
    STATUS = result.STATUS;
    EndConection(RESULT, STATUS,res);
});//fin del eandpoint get de busqueda
app.listen(666);

function EndConection(result, status, connection)
{
    connection.statusCode = status;
    connection.end(JSON.stringify (result));
}