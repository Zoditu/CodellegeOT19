class librery
{
    //crear mi constructor de los libros 
        constructor(books)
        {
            this.books=books;
        }//fin del contructor
        
    //crear el metodo para buscar libros 
        search(PARAMS)
        {
            var RESULT ={};
            var STATUS=200;
            //condicionar o comprobar si los query tiienen algun valor
            if(PARAMS.query)
            {
                //crear un arreglo donde se almacenaran los libros 
                var libros=[];
                //convertir los parametros de busqueda en minusculas
                var filter=PARAMS.query;
                filter=filter.toLowerCase();
                //crear el for que recorrera el arreglo de libros 
                this.books.forEach(book => {
                    //cambiar el titulo y author en minusculas 
                    var title = book.title.toLowerCase();
                    var author= book.title.toLowerCase();
                    //comparar si el titulo o author sean los mismos que en el filter  usando el metodo includes
                    if(title.include(filter)||author.include(filter))
                    {
                        //agregarlo al arreglo con push()
                        libros.push(book);

                    }//fin de comparar en el buscador
                    //logica para si los query capturados no encontro ningun libro
                    if(libros.length<1)
                    {
                        STATUS = 404;
                        RESULT.message = "No se han encontrado libros con el titulo, autor o ISBN" + PARAMS.query;
                    }else
                    {
                        RESULT.quantity = libros.length;
                        RESULT.books = libros;
                    }
                });//fin del foreach
            }//fin del if de params.query
            else
            {
                STATUS = 400;
                RESULT.error = true;
                RESULT.message = "invalid search query. Title/Author/ISBN expected."
            }
//el metodo nos regresara datos guardados en variables 
return {RESULT : RESULT, STATUS : STATUS};
        }//fin del metodo search

}//fin de la clase librery
module.exports=librery;