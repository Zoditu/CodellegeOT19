var AJAX = new XMLHttpRequest;
_books = [];


AJAX.onreadystatechange = function(){
    if(this.readyState === 4){
         //Todo bien
        if( this.status ===200 ){
            
            //error handling
            try {
                var result = this.responseText;
                result = JSON.parse(result);
                console.log(result);   
                
                //To-Do 
                var main = document.getElementById("main");
                var _books = result;
                for(var i=0; i<_books.length; i++){
                    console.log(_books[i].author);
                    main.innerHTML +=
                    '<div class="col-sm-4 marginBottom">'+
                '<div class="card relative">'+
                    '<img src=" ' + _books[i].imageLink + ' " class="card-img-top" alt="...">'+
                    '<article class="numbPages btn btn-warning">Pages: '+_books[i].pages+ '</article>'+
                    '<article class="lanBook btn btn-danger">ES</article>'+
                    '<article class="yearBook btn btn-info">'+_books[i].year+'</article>'+
                    '<div class="card-body">'+
                        '<h5 class="card-title text-center">'+ _books[i].title + '</h5>'+
                        '<p class="card-text"> ' + _books[i].author + '</p>'+
                        '<section class="float-left">'+
                            '<a href="'+ _books[i].link + '" class="btn btn-outline-dark">Read more</a> </section>'+
                    '</div>'+
                '</div>'+
            '</div> '
                }

            } catch (error) { }
        } else{
            //Algo salio mal
        }
    }
};

AJAX.open("GET", "http://localhost/files/books.json");
AJAX.send();