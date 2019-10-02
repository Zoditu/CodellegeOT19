var ajax= new XMLHttpRequest;//Para hacer peticiones en internet 
ajax.onreadystatechange = function(){

if(this.readyState==4){
// La peticion se cumplio (complete)
if(this.status==200){
// todo esta bien
  try{
    var result= this.responseText;
    var resultado= JSON.parse(result);
    console.log(resultado);
    var tarjeta= $("#Tarjeta");
    $(function(){
for(var i=0; i< resultado.length; i++){
tarjeta.append(
'<img src="images/a-Dolls-house.jpg" class="card-img-top" alt="...">'+
            '<div class="card-body">'+
            '<header></header>'+
            '<main>'+
                '<div class="card-title">'+
                    '<h5>'+resultado[i].title+'</h5>'+
                '</div>'+
                '<div class="autor card-text">'+
                '<p>'+resultado[i].author+'</p>'+
                '</div>'+
                '<div class="Blink d-inline-block">'+
                '<a href="'+resultado[i].link+'"class="btn btn-primary">Go somewhere</a>'+
                '</div>'+
            '</main>'+
            '</div>'
            );
}




});
  }
  catch(error){
console.log("Algo salio mal");
} 
}
};
 


}
ajax.open("GET","http://localhost/files/books.json");//crear una peticion 
ajax.send();

