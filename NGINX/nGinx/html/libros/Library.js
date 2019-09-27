//Una clase es una representación de un objeto en código
class Library
{
    //Los objetos tiene atributos y propiedades
    //Los atributos son características que describen al objeto
    //Las propiedades son características accesibles del objeto (getter, settter)
    //Las propiedades me permiten leer/modificar los atributos del objeto
    
    //Un constructor es una función pública que se ejecuta a la hora de inicializar un objeto
    //Inicializar está relacionado con instanciar un objeto
    //Instancia: Es una referencia en memoria de un objeto
    //Ej -> var AJAX = new XMLHttpRequest();
    /* XMLHttpRequest -> Es un objeto
     * AJAX -> Es una instancia
     * new XMLHttpRequest() es la inicialización del objeto
     */
    constructor( books )
    {
        //Empezar a definir atributos
        this.books = books;
    }

    //Métodos de un objeto.
    //Ejecutan ua rutina de este objeto
    Search( PARAMS )
    {
        var RESULT = {};
        if( PARAMS.title )
        {
            //Dónde almacenar los libros (Filtro)
            var libros = [];
            //Convertir el título del parámetro a minúsculas
            var _title = PARAMS.title.toLowerCase();
            //Para cada libro en books.json
            this.books.forEach( book => {
                //Convertir el título del libro a minúsculas
                var title = book.title.toLowerCase();
                //Si el título del libro contiene el título a buscar
                if( title.includes( _title ) )
                    //Agregar el libro al filtro (libros = [])
                    libros.push( book );
            });
            ////Equivalente es
            /*
            for( var i = 0; i < books.length; i++ )
            {
                var book = books[i];

            }
            */
            if( libros.length < 1 ) //Si no encontró ni un solo libro
            {
                RESULT.message = "No se han encontrado libros con el título: " + "'" + PARAMS.title + "'";
            }
            else
            {
                RESULT.quantity = libros.length;
                RESULT.books = libros;
            }

            return RESULT;
        }
    }

    /*
    //Para crear propiedades, necesito alguno o ambos de los accesores (get, set)
    get Query()
    {
        // this.query = '/algo/valor'
        //var result = this.query.replace( '/algo/', '' );
        //return result;
        return this.query;
    }

    set Query( value )
    {
        this.query = value;
    }
    */
}

module.exports = Library;

/*
//Interfaz de fisiología
class FisiologiaMamifera
{
    Caminar();
}

class Humano implements FisiologiaMamifera extends Mamifero
{
    Caminar()
    {
        //Como lo hace un humano
    }
}

class Mamifero
{

}
*/

//Una interfaz es una definción para implementaciones
//No tiene atributos, ni modificadores, ni propiedades
//Solo son métodos que se sobreescriben
//No se implementan, lo hace la clase que lo vaya a implementar