 // class - la referencia de un objeto
 /*
  *las propiedades son accesibles (accesores) 
   
  */

 class Library {

     //books parametro de entrada que recibe el constructor, el cual es el json
     constructor(books) {
         //Empieza a definis atributos
         //this.query = '';
         this.books = books;
     }

     //Metodos de un objeto
     //Ejecutan una rutina para ese objeto
     Search(PARAMS) {
         var RESULT = {};
         var STATUS = 200;

         if (PARAMS.query) {
             var libros = [];
             //Convertir el titulo del parametro en minusculas
             //OPERADOR TERNARIO.
             var filter = PARAMS.query;
             filter = filter.toLowerCase();

             this.books.forEach(book => {
                 var title = book.title.toLowerCase();
                 var author = book.author.toLowerCase();
                 // var title = book.title.toLowerCase();   
                 //Si el titulo del libro contiene el titulo a buscar

                 if (title.includes(filter) || author.includes(filter))
                     //Agregar el libro al filtro (libros=[])
                     libros.push(book);
             });

             if (libros.length < 1) {
                  STATUS = 404;
                 RESULT.message = "Could not find books matching title. author or ISBN" + "'" + PARAMS.query + "'";
             } else {
                 RESULT.quantity = libros.length;
                 RESULT.books = libros;
             }
         } else {
            STATUS = 400;
             RESULT.error = true;
             RESULT.message = "Invalid search query. Title/Autor/ISBN expected."
         }

         // res.write(JSON.stringify(RESULT));
         return {RESULT: RESULT, STATUS: STATUS };
        }
    }


 module.exports = Library;