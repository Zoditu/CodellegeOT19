// inicializar la peticion al servidor 
var peticion = new XMLHttpRequest;
peticion.onreadystatechange= function(){
if(peticion.readyState==4)
{
if(peticion.status==200)
{
try
{
var res=peticion.responseText;//la propiedad responseText te regresa la respuesta del servidor en forma de texto
var libroObj= JSON.parse(res);
console.log(libroObj);
var card = $("#Tarjeta");

//for para generar tus tarjetas 
for(var i=0;i<libroObj.length;i++)
{
card.append(
               " <!-- Imagen de la tarjeta -->"+
               '<div class="col-3 Catalogo p-0 d-inline-block mb-4">'+
                   '<img src="Imagenes/'+libroObj[i].imageLink+'" alt="" class="card-img-top w-100">  ' +
                '<section class="info badge mr-0">'+
                    '<div class="pages mx-auto">'+
                         '<span class="badge badge-primary">'+libroObj[i].pages+ '</span>' +
                    '</div>'+
                    '<div class="idioma">'+
                        '<span class="badge badge-primary">'+libroObj[i].language+'</span>'+
                    '</div>'+
                    '<div class="">'+
                        '<span class="badge badge-primary">'+libroObj[i].year+'</span>'+
                    '</div>'+
                '</section>'+
                '<!-- Titulo -->'+
                '<section>'+
                  '<h4>'+libroObj[i].title+'</h4>'+
                '</section>'+
                '<section class="text-center">'+
                  '<h5>'+libroObj[i].author+'</h5>'+
                '</section>'+
               ' <section class="piedelibro btn-group">'+
                  '<button type="button" class="btn btn-outline-warning">'+
                  '<a href="'+libroObj[i].link+'">Ver Libro</a>'+
                  '</button>'+
                 ' <button type="button" class="btn btn-outline-success">'+
                    'Agregar a carrito'+
                  '</button>'+
               ' </section>'+
                '</div>'
);//fin del append
}//fin del for 
}//fin del try
catch(error)
{
console.log("Algo salio mal");
}//fin del catch
}//fin del if del status
}//fin del if del radystate
}//fin del metodo onreadystatechange

peticion.open("GET","http://localhost/files/JSON/books.json",true);//abrir la peticion
peticion.send();