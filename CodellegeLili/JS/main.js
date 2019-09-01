var nombre = "sara",
    apellido = "hernandez",
    edad = 19,
    sexo;

const PI=3.141592654;

console.log(edad)

//reasigno sin VAR
edad= 21; 
sexo = 'M';

// PI= 4; //No puedo reasignar una constante ni dejarla vacia

console.log( nombre );
console.log(edad)

//las operaciones dan el RESULTADO
var suma= 5-1;//regresa el 4 ya hecho
console.log(suma);

var suma=1+1,
    resta=2-3,
    mult=5*5,
    div=125/4;

    console.log(suma);
    console.log(resta);
    console.log(mult);
    console.log(div);
    console.log(0/0); 
    console.log('5' - 1); 
    console.log('suma'+'resta');


    var comparacion = true;
    console.log(comparacion); //true false

    var comparacion= 1>2;
    console.log(comparacion);

    console.log('identidad con tres =');
    var comparacion= 1 =='1';
    console.log(comparacion)
    var comparacion = 1 ==='1';
    console.log(comparacion);



    
    console.log('funciones o metodos');
    //los parametros solo sirven adentro de su funcion scope
    
    var harina='harina';
    var manchego ='manchego';
    function PrepararQuesadillas(tortillas,queso){
        console.log('poner queso del tipo ' + queso+ ' en las tortillas del tipo '+tortillas );
        console.log('ponerlas en el comal');
        console.log('LISTO');
    }
    PrepararQuesadillas(harina, manchego);


    var InvocarQuesadilla = PrepararQuesadillas;
    InvocarQuesadillas(harina, manchego);

    