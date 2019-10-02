var AJAX = new XMLHttpRequest;
AJAX.onreadystatechange = function () {
    // console.log( "Estado: " + this.readyState );
    // console.log( "Status: " + this.status );
    //La petición fue cumplida (Completed)
    if (this.readyState === 4) {
        //Todo bien, pude leer el archivo
        if (this.status === 200) {
            //Error Handling (Manejo de errores/excepciones)
            try {
                //Qué hacer si todo salió bien la información
                var result = this.responseText;
                result = JSON.parse(result);
                console.log(result);
                $(function () {

                    for (var i = 0; i < result.length; i++) {
                        $("#card").append(
                            '<div class="col-sm-4 text-center my-3">' +
                            '<div class="card hcard" style="width: 16rem;">' +
                            '<img src="' + result[i].imageLink + '" class="card-img-top relative himg" alt="...">' +
                            '<div class="card-body">' +
                            '<h5 class="card-title text-left">' + result[i].title + '</h5>' +
                            '<p class="card-text text-center">' + result[i].author + '</p>' +
                            '<div class="text-right">' +
                            '<a href="' + result[i].link + '" class="btn btn-primary">Abstract</a>' +
                            '</div>' +
                            '<p class="pages">Pages:' + result[i].pages + '</p>' +
                            '<p class="idioma">ES</p>' +
                            '<p class="año">Year: ' + result[i].year + '</p>' +
                            '</div>' +
                            '</div>' +
                            '</div>'
                        );
                    }

                });

                //console.log( "Nah todo bien" );        
            } catch (error) {
                console.log("Algo salió mal... Puede que el archivo esté corrupto");
            }

        } else {
            //Algo salió mal... ?
        }
    }
};

// 

//AJAX.open( "GET", "http://localhost/files/books.json" );
//AJAX.open("GET", "http://localhost:666/library/search?query=' + 'inputSearch.value", true);
//AJAX.send();

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