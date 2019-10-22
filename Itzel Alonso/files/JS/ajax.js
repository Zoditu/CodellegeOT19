

var AJAX = new XMLHttpRequest;
AJAX.onreadystatechange = function () {

    //  console.log("ESTATUS: " + '' + this.readyState);
    //  console.log("ESTADO: " + '' +this.status);

    // la peticion fue cumplida.
    if (this.readyState === 4) {
        // console.log("ESTATUS: " + this.readyState);
        // console.log("ESTADO: " + this.status);

        //todo bien pude leer el archivo
        if (this.status === 200)

            //Error handling ( manejo de errores)
            try {
                var result = this.responseText;
                result = JSON.parse(result);
                console.log(result);
                // console.log("ESTATUS: " + this.readyState);
                // console.log("ESTADO: " + this.status);
                // generar las tarjetitas.

                $(function (){
                    for (var i = 0; i < result.quantity; i++) 
                    {
                        $( "#row" ).append(
                            '<div class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-3 bottom">' +
                            '<section class="tarjeta">' +
                            '<!--TARJETA-->' +
                            '<section class="portada">' +
                            '<!--portada del libro-->' +
                            '<section class="datos">' +
                            '<article class="pages flower"> ' + result[i].pages + '</article>' +
                            '<article class="idioma">'+ result[i].language + '</article>' +
                            '<article class="year">' + result[i].year + '</article>' +
                            '</section>' +
                            '<img src="' + result[i].imageLink + '" alt="PORTADA DEL LIBRO.">' +
                            '</section>' +
                            '<section class="clear"></section>' +
                            '<section class="bibliografia">' +
                            ' <header class="titulo flower style="font-size:1rem;">' + result[i].title + '</header>' +
                            '<main class="autor"> '+ result[i].author + '</main>' +
                            '<footer class="info">' +
                            '<button type="button" class="btn btn-outline-info">' +
                            '<a href="' + result[i].link + '" target="_blank"> Read more </a>' +
                            '</button>' +
                            '</footer>' +
                            '</section>' +
                            '</section>' +
                            '</div>'
                        )

                    }



                });

            }


        catch (error) {
            //algo salio mal.....?
            console.log("Algo salio mal.... puede que el archivo este corrupto.");
        }

    }


};

AJAX.open("GET", "http://localhost:1998/library/search?query=",true);
AJAX.send();

/*
Peticiones web. *http

*CRUD--> create read update delete.
*CREATE--> post
Read-> Get
Update -> PUT
Delete -> Delete

las peticiones necesitan: metodo (CRUD)
*/