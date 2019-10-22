var http = require('http'); //Modulo para crear servidores (API, WebServices)
var FileStream = require('fs'); // modulo para leer y escribir archivos.
var books = require('./books.json'); // Leer el archivo y lo convierte a array.
var URL = require('url-parse'); //Modulo para administrar el endpoint.
 

http.createServer((req, response) => { // Crear un servidor, con so parametros, request y response.

    var datos = URL(req.url, true);
    var ENDPOINT = datos.pathname;
    var PARAMS = datos.query;
    var RESULT = {};
    /*Datos ={
        pathname: ENDPOINT,
        query: PARAMETROS,

    }
    rec.method -> GET|POST|PUT|DELETE|ETC..

*/

    switch ( ENDPOINT ) {
        case '/library': //endpoint para operaciones de libros.
        {
            //localhost:666/library?title=titulo del libro  REVISAR EL CONCEPTO DE CALLBACK
            if (PARAMS.title) 
            {
                // donde alamacenar lo libros (FILTRO)
                var libros = [];
                //Convertir el titulo del parametro a minusculas.
                var _title = PARAMS.title.toLowerCase();
                //para cad alibro en books.json
                books.forEach( book => {
                    //convertir el tituloo del libro a minsuculas
                    var title = book.title.toLowerCase();
                    // si el titulo del libro contiene el titulo a buscar
                    if ( title.includes ( _title ))
                        // agregar el libro al filtro (libros = [])
                        libros.push( book );

                });
                //equivalente es:
                /* 
                    for( var i = 0; i < books.length; i++ )
                    {

                    }
                */

                if (libros.length < 1) //si no encontro ni un solo libro
                {
                    RESULT.message = "No se han encontrado libros con el titulo: " + "'" + PARAMS.title + "'";
                } else {

                    RESULT.quantity = libros.length;
                    RESULT.books = libros;
                }
                response.end ( JSON.stringify ( RESULT ))
            }
        }
        break;
    }
    response.end();

}).listen(666); //Indica al servidor en que puerto escuchar
//EJ" localhost:[PUERTO]
//osea, localhost:666