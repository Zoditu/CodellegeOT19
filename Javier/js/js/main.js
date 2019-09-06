// var name = "Javier ",
//     lname = "Anguano ",
//     age = 22;

//     const pi = 3.14; 
// alert("Mi nombre es " + name + lname + " y tengo " + age);

//undefiend mandaste un valor vacio
function quesadilla(tortilla, queso) {
    console.log('');
    console.log("Ponerla en el comal");
    console.log("LISTO");
}

quesadilla();

//Tipos de datos complejos
var arreglo = [1, 2, 3, 4, 5];
console.log(arreglo[5]);

//Objetos
var Persona = {
    nombre: "Javier",
    "Estado Civil": "Soltero", //solo asi para agregar valor con espacios
    apellidoPaterno: "Anguiano",
    apellidoMaterno: "de Lara",
    sexo: "masculino",
    edad: "21",
    CURP: "AULJ980522HNLRV03",
    altura: "1.78",
    peso: "90",
    nacionalidad: "MEXICANO",
};
console.log([Persona]);    

//ejercicio Kevin
var Alumnos = [
    {//Celestino
        nombre: "Celestino",
        apellidoPaterno: "Gonzalez",
        apellidoMaterno: "Marquez",
        sexo: "masculino",
        edad: "23",
        altura: "...",
        nacionalidad: "MEXICANO",
        mostrar: function(){
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)   
        }
    },
    {//Itzel
        nombre: "Itzel",
        apellidoPaterno: "Alonso",
        apellidoMaterno: "Garcia",
        sexo: "femenino",
        edad: "22",
        altura: "1.72",
        nacionalidad: "mexicana",
        mostrar: function(){
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)   
        }
    },
    {//Liliana
        nombre: "Liliana",
        apellidoPaterno: "Hernandez",
        apellidoMaterno: "Gonzalez",
        sexo: "femenino",
        edad: "19",
        altura: "1.70",
        nacionalidad: "MEXICANA",
        mostrar: function(){
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)   
        }
    },
    {//Aldo
        nombre: "Aldo",
        apellidoPaterno: "Matias",
        apellidoMaterno: "Galindo",
        sexo: "masculino",
        edad: "23",
        altura: "1.77",
        nacionalidad: "MEXICANO",
        mostrar: function(){
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)   
        }
    },
    {//Aaron
        nombre: "Aaron",
        apellidoPaterno: "Arredondo",
        apellidoMaterno: "Araguz",
        sexo: "masculino",
        edad: "20",
        altura: "1.74",
        nacionalidad: "MEXICANO",
        mostrar: function(){
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)   
        }
    },
    {//Karla
        nombre: "Karla",
        apellidoPaterno: "Gonzalez",
        apellidoMaterno: "Hernandez",
        sexo: "femenino",
        edad: "20",
        altura: "1.68",
        nacionalidad: "MEXICANA",
        mostrar: function(){
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)   
        }
    },
    {//Natalia
        nombre: "Natalia",
        apellidoPaterno: "Rodriguez",
        apellidoMaterno: "Capitan",
        sexo: "femenino",
        edad: "22",
        altura: "1.56",
        nacionalidad: "MEXICANA",
        mostrar: function(){
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)   
        }
    },
    {//Andres
        nombre: "Andres",
        apellidoPaterno: "Ramos",
        apellidoMaterno: "Rodriguez",
        sexo: "masculino",
        edad: "19",
        altura: "1.60",
        nacionalidad: "COLOMBIANO",
        mostrar: function(){
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)   
        }
    },
    {//Ricardo
        nombre: "Ricardo",
        apellidoPaterno: "Teneyuque",
        apellidoMaterno: "Marquez",
        sexo: "masculino",
        edad: "20",
        altura: "1.70",
        nacionalidad: "MEXICANO",
        mostrar: function(){
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)   
        }
    },
    {//Sho
        nombre: "Javier",
        apellidoPaterno: "Anguiano",
        apellidoMaterno: "de Lara",
        sexo: "masculino",
        edad: "21",
        altura: "1.78",
        nacionalidad: "MEXICANO",
        mostrar: function(){
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)   
        }
    },
    {//Charles
        nombre: "Carlos",
        apellidoPaterno: "Mendoza",
        apellidoMaterno: "Andrade",
        sexo: "masculino",
        edad: "22",
        altura: "1.78",
        nacionalidad: "MEXICANO",
        mostrar: function(){
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)   
        }
    },
    {//Andrew
        nombre: "Andres",
        apellidoPaterno: "Coronado",
        apellidoMaterno: "Lazaro",
        sexo: "masculino",
        edad: "2",
        altura: "...",
        nacionalidad: "MEXICANO", 
        mostrar: function(){
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)   
        }       
    },
    {//Miriam
        nombre: "Miriam",
        apellidoPaterno: "Herrera",
        apellidoMaterno: "Reyna",
        sexo: "femenina",
        edad: "21",
        altura: "1.60",
        nacionalidad: "MEXICANA",
        mostrar: function(){
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)   
        }
    },
];
// alert(Alumnos.length);

var numeros = [1,2,3,4,5,6,7,8,9]
// for(var i=0; i < numeros.length; i = i + 1 ){
//     console.log(numeros[i]);
// };
// for(var i = numeros.length; i >= 0; i = i - 1 ){
//     console.log(numeros[i]);
// };
for(var i=0; i < numeros.length; i = i + 1 ){
    if(numeros[i]>4){
        console.log(numeros[i]);
    }
    else{ //error logico!!!, ya que el primer numero que revisa no es mayor a 40 y por eso rompe el ciclo
        break;
    }
};