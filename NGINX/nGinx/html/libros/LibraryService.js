var http = require( 'http' ); //Módulo para crear servidores (API, WebServices)
var FileStream = require( 'fs' ); //Módulo para leer y escribir archivos
var books = require('./books.json'); //Leer el archivo y lo convierte a array
var URL = require( 'url-parse' ); //Módulo para admnistrar el endpoint

var Library = require( './Library' ); //Importar la clase Library
var CodeBook = new Library( books ); //Instanciar la librería (CodeBook)

http.createServer( (req, res) =>{ //Crea un servidor, con dos párametros, request y response
    var datos = URL( req.url, true );
    var ENDPOINT = datos.pathname;
    var PARAMS = datos.query;
    var STATUS = 200;
    var RESULT = {};
    /* datos = {
     *   pathname: ENDPOINT,
     *   query: PARAMETROS  
     * }
     * req.method -> GET|POST|PUT|DELETE|ETC...
     */
    switch( ENDPOINT )
    {
        case '/library/search': //Endpoint de búsqueda
        {
            //Si se manda el parámetro title
            //localhost:666/library/search?title=titulo del libro
            RESULT = CodeBook.Search( PARAMS );
        }
        break;
    }
    
    EndConnection( RESULT, STATUS, res );

}).listen( 666 ); //Indica al servidor en qué puerto escuchar
//Ej: localhost:PUERTO
//O sea, localhost:666

function EndConnection( result, status, connection )
{
    connection.statusCode = status;
    connection.end( JSON.stringify( result ) );
}