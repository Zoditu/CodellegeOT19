//TIPOS DE DATOS COMPLEJOS*****************************************************************

//en el arreglo puedo meter lo que sea pero mejor hazlo con objetos

var arreglo = [ 10,20,30,40,50 ]; //inicializar
//               0  1  2  3  4

console.log(arreglo);
//alert('valor' + arreglo);
//alert(arreglo[2]);

//objetos
//las propiedades son unicas kbp
var objetos ={
    propiedad: 'valor',
    propiedad2: 'valor2',
    propiedad3: 'valor3',
    propiedad4: 45,
    propiedad5: function(){

    }
};

//para acceder a cualquier propiedad del objeto le pomgo el . (punto) en alert y console o hasheo
var persona={
    nombre: 'lili',
    'estado civil': 'soltera', //no puedo acceder a esta propiedad facil
    apellido: 'hernandez',
    sexo: 'm',
    edad: 19,
    curp: 'HEGL990916MVZRNL08',
    altura: 170,
    nacionalidad: 'francesa'
};
console.log(persona);
console.log(persona.nombre);

//hash
//hashing
//hashear
//    'persona' -> 456
//    'sexo' -> 12
console.log(persona['nombre']);


//arreglo de objetos
var Alumnos = [
    {//celestino
        nombre:'celestino',
        apellidos:'gonzalez',
        edad:66,
        sexo:'h',
        altura:160,
        nacionalidad:'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//itzel
        nombre:'itzel',
        apellidos:'alonso',
        edad: 22,
        sexo: 'm',
        altura: 170,
        nacionalidad:'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//lili
        nombre:'liliana',
        apellidos:'hernandez',
        edad: 19,
        sexo: 'm',
        altura: 170,
        nacionalidad: 'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//luis
        nombre:'luis',
        apellidos:'gonzalez',
        edad: 27,
        sexo: 'h',
        altura: 182,
        nacionalidad: 'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        } 
    },
    {//aldo
        nombre:'aldo',
        apellidos:'matias',
        edad: 23 ,
        sexo: 'h',
        altura: 177,
        nacionalidad: 'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//aaron
        nombre:'aaron',
        apellidos:'arredondo',
        edad: 20,
        sexo: 'h',
        altura: 174,
        nacionalidad:'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//karla
        nombre:'karla',
        apellidos:'gonzalez',
        edad: 20,
        sexo: 'm',
        altura: 148,
        nacionalidad:'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//natalia
        nombre:'natalia',
        apellidos:'rodriguez',
        edad: 22,
        sexo: 'm',
        altura: 156,
        nacionalidad:'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//andy
        nombre:'andy',
        apellidos:'escobar',
        edad: 19,
        sexo: 'h',
        altura: 160,
        nacionalidad:'colombiana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//richard
        nombre:'richard',
        apellidos:'webber',
        edad: 20,
        sexo: 'h',
        altura: 170,
        nacionalidad:'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//javo
        nombre:'javo',
        apellidos:'anguiano',
        edad: 21,
        sexo: 'h',
        altura: 177,
        nacionalidad:'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        } 
    },
    {//charles
        nombre:'charles',
        apellidos:'mendoza',
        edad: 22,
        sexo: 'h',
        altura: 178,
        nacionalidad:'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        } 
    },
    {//andrew
        nombre:'andrew',
        apellidos:'coronado',
        edad: 22,
        sexo: 'h',
        altura: 175,
        nacionalidad:'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        } 
    },
    {//miriam
        nombre:'miriam',
        apellidos:'herrera',
        edad: 21,
        sexo: 'm',
        altura: 165,
        nacionalidad:'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        } 
    }
];
console.log('MOSTRAR  a todos de uno por uno')
Alumnos[0].mostrar();
Alumnos[1].mostrar();
Alumnos[2].mostrar();
Alumnos[3].mostrar();
Alumnos[4].mostrar();
Alumnos[5].mostrar();
Alumnos[6].mostrar();
Alumnos[7].mostrar();
Alumnos[8].mostrar();
Alumnos[9].mostrar();
Alumnos[10].mostrar();
Alumnos[11].mostrar();
Alumnos[12].mostrar();
Alumnos[13].mostrar();



//for para mostrar todos los arreglos
console.log('MOSTRAR por medio de un for')
alert(Alumnos.length);
for( var i=0; i<Alumnos.length;  i=i+1){          //length el sabe cuantos elementos hay en un arreglo
    Alumnos[i].mostrar();
}

//filtar alumnos
console.log('FILTRAR');
for( var i=0; i<Alumnos.length; i=i+1){
    if(Alumnos[i].sexo == 'm'){
        console.log( Alumnos[i].mostrar());
    }
}
for( var i=0; i<Alumnos.length; i=i+1){
    if(Alumnos[i].sexo == 'h'){
        console.log( Alumnos[i].mostrar());
    }
}

//filtar de otra manera
console.log('FILTRAR de otra manera')
var hombres =[];
for(var i=0; i<Alumnos.length; i=i+1){
    if(Alumnos[i].sexo=='h')
        hombres.push(Alumnos[i]);
    else
        console.log(Alumnos[i]);
}
console.log(hombres);


console.log('FILTAR con while');
//while
var hombres = [];
var i=0;
while(i<Alumnos.length){
    if(Alumnos[i].sexo=='h')
        hombres.push(Alumnos[i]);
    else
        console.log(Alumnos[i]);
    i=i+1;
}




var Alumnos = [];
window.onload = function(){  //todo se ejecuta despues de haber cargado la pagina
    var main = document.getElementById('main'); //me traigo el elemento
    for( var i=0; i<Alumnos.length; i++){
       main.innerHTML += '<h4>' + Alumnos[i].nombre + ' '+ Alumnos.apellido + '</h4>'
    }
}




















































//formas de usar el for

var numeros = [1,2,3,4,5,6,7,8,9];
for(var i=numeros.length-1;   i>=0;    i=i-1){
    console.log(numeros[i]);
}

var num = [10,20,30,40,50,60,70,80,90];
//for(var i=num.length-1;   i>=0;    i=i-1){
for( var i=0; i<Alumnos.length;  i=i+1){
   if( num[i]>40 ){
        console.log(num[i]);
   }//else{
       //break;   //este for acabalo  pa optimizar porque le quito procesamiento innecesario
   //}
}








































/*TIPS DE JS
-verificar nombre de la variable/clase
-revisar los imports de css y js
-sintaxis ; . , = :
-error se "shorthand assing" le puse = a algo que no deberia
si es arreglo es for de ahuevo
-errores logicos: algo que no supe escribir
*/
