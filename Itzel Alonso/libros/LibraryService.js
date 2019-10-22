var http = require('http'); // Mdulo para crear servidores (API, WebSerices)
var FileStream = require('fs'); // Modulo para leer y esribir archivos
var books = require('./books.json'); //Leer el archivo y lo convierte en array
var URL = require('url-parse'); // Modulo para admininstrar el endpoint  
var RESULT = {};


//expres para NODEjs
var express = require('express'); //importa el modulo de express
var app = express(); //instancia una referencia

var Library = require('./Library'); //Importar la clase library
var CodeBook = new Library(books); //Instanciar la libreria CodeBook
//Cuando inicializar mandas a llamar el constructor
app.get('/library/search', (req, res) => {

    var datos = URL(req.url, true);
    var ENDPOINT = req._parsedUrl.pathname;
    var PARAMS = datos.query;
    var METHOD = req.method;
    var STATUS = 200;
    var RESULT = {};

    var result = CodeBook.Search( PARAMS );
    RESULT = result.RESULT;
    STATUS = result.STATUS;

    EndConnecion( RESULT, STATUS, res );
});

app.get('/library/shop', (req, res) => {
    //traer el carrito de compras

});

app.listen(1998);
// http.createServer((req, res) => { // Crear un servidor, con dos parametros, resquesty responsive

//     var datos = URL(req.url, true);
//     var ENDPOINT = datos.pathname;
//     var PARAMS = datos.query;
//     var METHOD = req.method;
//     var STATUS = 200;
//     var RESULT = {};

//     switch (ENDPOINT) {
//         case '/library/search': {
//             //localhost:666/library?title=titulo-del-libro
//             if ( METHOD === 'GET')
//             {  var result= CodeBook.Search(PARAMS);
//             RESULT = result.RESULT;
//             STATUS = result.STATUS;
//             }
//             else
//             {
//                 RESULT.error = true;
//                 STATUS = 405;
//                 RESULT.message = "Method: " + METHOD + " is not allowed in endpoint " + ENDPOINT + ""; 
//             }

//         }
//         break;

//         case 'library/shop':
//         {
//             if ( METHOD === 'GET')
//             {  var result= CodeBook.Search(PARAMS);
//             RESULT = result.RESULT;
//             STATUS = result.STATUS;
//             }
//             else
//             {
//                 RESULT.error = true;
//                 STATUS = 405;
//                 RESULT.message = "Method: " + METHOD + " is not allowed in endpoint " + ENDPOINT + ""; 
//             }
//         }



//     default: {
//         STATUS = 406;
//         RESULT.message = "Invalid Endpoint.'" + ENDPOINT + "' dosen't exist";
//     }
//     }
//     EndConnecion(RESULT, STATUS, res);

// }).listen(1998); //Indica al servidor en que puerto escuchar
//Ej: localhost:PUERTO ==> localhost:1998

function EndConnecion(result, status, connection) {
    connection.statusCode = status;
    connection.end(JSON.stringify(result));
}

// function CreateEndpointRequest ( endpoint, method,userRequest, WhatToDo )
// {
//     if( me )
// }