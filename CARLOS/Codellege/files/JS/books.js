var peticion = new XMLHttpRequest;
peticion.onreadystatechange= function(){
if(this.readyState== 4){
 if(this.status==200){
    try{
        var book = this.responseText;
        var objBook= JSON.parse(book);
        console.log(objBook);
        var tarjeta = $("#BOOKS");
        //empieza la logica en JS para generar las tarjetas de los libros 
        $(function(){
            for(var i =0; i<objBook.length; i++){
                tarjeta.append(
        '<div class="row d-inline-block">'+
            '<div class="col">'+
                '<article class="Tarjeta d-inline-block">'+
                    '<section class="foto">'+
                    '</section>'+
                    '<section class="EtiquetasInfo">'+
                        '<div class="paginas d-inline-block">'+
                            '<p>'+objBook[i].pages+'paginas</p>'+
                        '</div>'+
                        '<div class="clear"></div>'+
                        '<div class="idioma d-inline-block">'+
                            '<p>'+objBook[i].language+'</p>'+
                        '</div>'+
                        '<div class="año d-inline-block">'+
                            '<p>'+objBook[i].year+'</p>'+
                        '</div>'+
                    '</section>'+
                    '<section class="description">'+
                        '<header class="titulo">'+
                            '<h5>'+objBook[i].title+'</h5>'+
                        '</header>'+
                        '<main class="card-text">'+
                            '<h5>'+objBook[i].author+'</h5>'+
                        '</main>'+
                        '<footer class="link">'+
                        '<a href='+objBook[i].link+'class="btn btn-primary">Ver Libro</a>'+
                        '</footer>'+
                    '</section>'+
                '</article>'+
            '</div>'+
        '</div>'
                );//fin del append
            }//findel for del arreglo
        });// fin del onloand


    }//fin del try 
    catch{

    }//fin del catch
 }// fin del if del status de la peticion
}//fin del if del estado  de la peticion
}//fin del onreadystatechange
peticion.open("GET","http://localhost/files/books.json");//crear una peticion
peticion.send();