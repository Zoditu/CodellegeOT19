var Nombre="Carlos";
var Apellidos="Mendoza Andrade";
var Edad= 22;

console.log(Nombre);
console.log(Edad);

Edad=21;
console.log(Edad);

function Prepararquesadilla(Tortilla, queso){
console.log("Poner queso del tipo:"+ queso+ "en tortilla");
console.log("Poner en el comal");
console.log("Listo");
}

Prepararquesadilla();

// Tipos de datos "Complejos"
var arreglo=[1,2,3,4,5];
 console.log(arreglo[2]);

 // Objetos 
 var Objeto={
     propiedad: "Valor", 
     propiedad2: "valor2",
     propiedad3: true,
     propiedad4: 45,
     propiedad5: function(){

     }
 };

 var alumnos=[
     {
    //  Carlos
         Nombre:"Carlos",
         ApellidoPaterno:"Mendoza",
         ApellidoMaterno:"Andrade",
         Edad:22,
         Estatura: 1.80,
         Sexo: "H",
         Nacionalidad: "Mexicano",
         mostrar: function(){
             console.log(this.Nombre+" "+this.ApellidoPaterno);
             console.log("Edad: "+ this.Edad);
         }
     },
    // Itzel
     {
        Nombre:"Itzel",
        ApellidoPaterno:"Alonso ",
        ApellidoMaterno:"Garcia",
        Edad:22,
        Estatura: 1.72,
        Sexo: "M",
        Nacionalidad: "Mexicano",
        mostrar: function(){
            console.log(this.Nombre+" "+this.ApellidoPaterno);
            console.log("Edad: "+ this.Edad);
        }
    },

    {
        Nombre:"Liliana",
        ApellidoPaterno:"Hernadnez",
        ApellidoMaterno:"Gonzales",
        Edad:19,
        Estatura: 1.70,
        Sexo: "M",
        Nacionalidad: "Mexicano",
        mostrar: function(){
            console.log(this.Nombre+" "+this.ApellidoPaterno);
            console.log("Edad: "+ this.Edad);
        }
    },

    {
        Nombre:"Aldo",
        ApellidoPaterno:"MAtias",
        ApellidoMaterno:"Galindo",
        Edad:23,
        Estatura: 1.77,
        Sexo: "H",
        Nacionalidad: "Mexicano",
        mostrar: function(){
            console.log(this.Nombre+" "+this.ApellidoPaterno);
            console.log("Edad: "+ this.Edad);
        }
    },

    {
        Nombre:"Aaron",
        ApellidoPaterno:"Arredondo",
        ApellidoMaterno:"Sarauz",
        Edad:20,
        Estatura: 1.74,
        Sexo: "H",
        Nacionalidad: "Mexicano",
        mostrar: function(){
            console.log(this.Nombre+" "+this.ApellidoPaterno);
            console.log("Edad: "+ this.Edad);
        }
    },
//  Karla
    {
        Nombre:"Karla",
        ApellidoPaterno:"Gonzalez",
        ApellidoMaterno:"Hernandez",
        Edad:20,
        Estatura: 1.48,
        Sexo: "M",
        Nacionalidad: "Mexicano",
        mostrar: function(){
        console.log(this.Nombre+" "+this.ApellidoPaterno);
        console.log("Edad: "+ this.Edad);
        }
    },
//  Natalia
    {
        Nombre:"Natalia",
        ApellidoPaterno:"Rodriguez",
        ApellidoMaterno:"Capitan",
        Edad:22,
        Estatura: 1.56,
        Sexo: "M",
        Nacionalidad: "Mexicano",
        mostrar: function(){
            console.log(this.Nombre+" "+this.ApellidoPaterno);
            console.log("Edad: "+ this.Edad);
        }
    },
//  Andress
    {
        Nombre:"Andres",
        ApellidoPaterno:"Ramos",
        ApellidoMaterno:"Escobar",
        Edad:19,
        Estatura: 1.60,
        Sexo: "H",
        Nacionalidad: "Colombiano",
        mostrar: function(){
            console.log(this.Nombre+" "+this.ApellidoPaterno);
            console.log("Edad: "+ this.Edad);
        }
    },

    {
        Nombre:"Ricardo",
        ApellidoPaterno:"Teneyuque",
        ApellidoMaterno:"Guerta",
        Edad:20,
        Estatura: 1.70,
        Sexo: "H",
        Nacionalidad: "Mexicano",
        mostrar: function(){
            console.log(this.Nombre+" "+this.ApellidoPaterno);
            console.log("Edad: "+ this.Edad);
        }
    },

    {
        Nombre:"Javier",
        ApellidoPaterno:"Anguiano",
        ApellidoMaterno:"de lara",
        Edad:21,
        Estatura: 1.77,
        Sexo: "H",
        Nacionalidad: "Mexicano",
        mostrar: function(){
            console.log(this.Nombre+" "+this.ApellidoPaterno);
            console.log("Edad: "+ this.Edad);
        }
    },

    {
        Nombre:"Andres",
        ApellidoPaterno:"Coronado",
        ApellidoMaterno:"Lazaro",
        Edad:22,
        Estatura: 1.75,
        Sexo: "H",
        Nacionalidad: "Mexicano",
        mostrar: function(){
            console.log(this.Nombre+" "+this.ApellidoPaterno);
            console.log("Edad: "+ this.Edad);
        }
    },

    {
        Nombre:"Miriam",
        ApellidoPaterno:"Herrera",
        ApellidoMaterno:"Reyna",
        Edad:21,
        Estatura: 1.60,
        Sexo: "M",
        Nacionalidad: "Mexicano",
        mostrar: function(){
            console.log(this.Nombre+" "+this.ApellidoPaterno);
            console.log("Edad: "+ this.Edad);
        }
    },

    {
        Nombre:"Celestino",
        ApellidoPaterno:"Gonzales",
        ApellidoMaterno:"Marquez",
        Edad:20,
        Estatura: 1.60,
        Sexo: "H",
        Nacionalidad: "Mexicano",
        mostrar: function(){
            console.log(this.Nombre+" "+this.ApellidoPaterno);
            console.log("Edad: "+ this.Edad);
        }
    },

 ]

 var Hombre=[];
//  for( var i=0;i<alumnos.length; i=i+1){
//     if(alumnos[i].Sexo== "H"){
//         Hombre.push(alumnos[i]);
//     }else{
//         console.log(alumnos[i]);
//     }
//  }
var i=0;
while(i<alumnos.length){
    if(alumnos[i].Sexo== "H"){
        Hombre.push(alumnos[i]);
             }else{
                 console.log(alumnos[i]);
             }
             i=i+1;
}
 console.log(Hombre);

// alumnos[0].mostrar();
// alumnos[1].mostrar();
// alumnos[2].mostrar();
// alumnos[3].mostrar();
// alumnos[4].mostrar();
// alumnos[5].mostrar();
// alumnos[6].mostrar();
// alumnos[7].mostrar();
// alumnos[8].mostrar();
// alumnos[9].mostrar();
// alumnos[10].mostrar();
// alumnos[11].mostrar();
// alumnos[12].mostrar();
 
//  alert(alumnos.length);

//  for(var i=0; i<alumnos.length;i+1){
    // alumnos[i].mostrar();}
// Numeros

// var numeros=[1,2,3,4,5,6,7,8,9];
// for( var i=0; i<numeros.length;i=i+1){
//     if(numeros[i]>=5){
//          console.log(numeros[i]);
//     }
   
// }


