var AJAX = new XMLHttpRequest;

AJAX.onreadystatechange = function()
{
    //console.log( "Estado: " + this.readyState );
    //console.log( "Status: " + this.status );
    //La petición fue cumplida (Completed)
    if( this.readyState === 4 )
    {
        //Todo bien, pude leer el archivo
        if( this.status === 200 )
        {
            //Error Handling (Manejo de errores/excepciones)
            try
            {
                //Qué hacer si todo salió bien la información
                var result = this.responseText;
                result = JSON.parse( result );
                console.log( result );
                //console.log( "Nah todo bien" );
                //generar las tarjetitas
            }
            catch( error )
            {
                console.log( "Algo salió mal... Puede que el archivo esté corrupto" );
            }
        }
        else
        {
            //Algo salió mal... ?
        }
    }
};

AJAX.open( "GET", "http://localhost:2090/files/books.json" );
AJAX.send();

/*
 * Peticiones WEB (HTTP)
 * CRUD -> Create Read Update Delete
 * Create -> POST
 * Read -> GET
 * Update -> PUT
 * Delete -> DELETE
 * 
 * Las peticiones necesitan: Método (CRUD), URL (Servidor) y datos
 * La respuesta se conforma de dos cosas: Resultado y un status (1xx - 5xx). Si todo va bien, 2xx
*/
