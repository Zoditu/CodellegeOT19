var Alumnos = [
    { //Celestino
    nombre: "Celestino",
    apellidoPaterno: "González",
    apellidoMaterno: "Márquez",
    sexo: "M",
    edad: 23,
    altura: "...",
    nacionalidad: "Mexicano",
    mostrar: function()
    {
        console.log( this.nombre + " " + this.apellidoPaterno );
        console.log( "Edad: " + this.edad );
    }
    },
    { //Itzel
    nombre: "Itzel",
    apellidoPaterno: "Alonso",
    apellidoMaterno: "García",
    sexo: "F",
    edad: 22,
    altura: 1.72,
    nacionalidad: "Mexicana",
    mostrar: function()
    {
        console.log( this.nombre + " " + this.apellidoPaterno );
        console.log( "Edad: " + this.edad );
    }
    },
    { //Lili
    nombre: "Liliana",
    apellidoPaterno: "Hernández",
    apellidoMaterno: "Gonzalez",
    sexo: "F",
    edad: 19,
    altura: 1.7,
    nacionalidad: "Mexicana",
    mostrar: function()
    {
        console.log( this.nombre + " " + this.apellidoPaterno );
        console.log( "Edad: " + this.edad );
    }
    },
    { //Aldo
    nombre: "Aldo",
    apellidoPaterno: "Matías",
    apellidoMaterno: "Galindo",
    sexo: "M",
    edad: 23,
    altura: 1.77,
    nacionalidad: "Mexicano",
    mostrar: function()
    {
        console.log( this.nombre + " " + this.apellidoPaterno );
        console.log( "Edad: " + this.edad );
    }
    },
    { //Aarón
    nombre: "Aarón",
    apellidoPaterno: "Arredondo",
    apellidoMaterno: "Aruguz",
    sexo: "M",
    edad: 20,
    altura: 1.74,
    nacionalidad: "Mexicano",
    mostrar: function()
    {
        console.log( this.nombre + " " + this.apellidoPaterno );
        console.log( "Edad: " + this.edad );
    }
    },
    { //Karla
    nombre: "Karla",
    apellidoPaterno: "González",
    apellidoMaterno: "Hernández",
    sexo: "F",
    edad: 20,
    altura: 1.48,
    nacionalidad: "Mexicana",
    mostrar: function()
    {
        console.log( this.nombre + " " + this.apellidoPaterno );
        console.log( "Edad: " + this.edad );
    }
    },
    { //Natalia
    nombre: "Natalia",
    apellidoPaterno: "Rodriguez",
    apellidoMaterno: "Capitán",
    sexo: "F",
    edad: 22,
    altura: 1.56,
    nacionalidad: "Mexicana",
    mostrar: function()
    {
        console.log( this.nombre + " " + this.apellidoPaterno );
        console.log( "Edad: " + this.edad );
    }
    },
    { //Andrés Colombia 
    nombre: "Andrés",
    apellidoPaterno: "Ramos",
    apellidoMaterno: "Rodriguez",
    sexo: "M",
    edad: 19,
    altura: 1.6,
    nacionalidad: "Mexicano",
    mostrar: function()
    {
        console.log( this.nombre + " " + this.apellidoPaterno );
        console.log( "Edad: " + this.edad );
    }
    },
    { //Ricardo
    nombre: "Ricardo",
    apellidoPaterno: "Teneyuque",
    apellidoMaterno: "Huerta",
    sexo: "M",
    edad: 20,
    altura: 1.7,
    nacionalidad: "Mexicano",
    mostrar: function()
    {
        console.log( this.nombre + " " + this.apellidoPaterno );
        console.log( "Edad: " + this.edad );
    }
    },
    { //Javier
    nombre: "Javier",
    apellidoPaterno: "Anguiano",
    apellidoMaterno: "de Lara",
    sexo: "M",
    edad: 21,
    altura: 1.77,
    nacionalidad: "Mexicano",
    mostrar: function()
    {
        console.log( this.nombre + " " + this.apellidoPaterno );
        console.log( "Edad: " + this.edad );
    }
    },
    { //Carlos
    nombre: "Carlos",
    apellidoPaterno: "Mendoza",
    apellidoMaterno: "Andrade",
    sexo: "M",
    edad: 22,
    altura: 1.8,
    nacionalidad: "Mexicano",
    mostrar: function()
    {
        console.log( this.nombre + " " + this.apellidoPaterno );
        console.log( "Edad: " + this.edad );
    }
    },
    { //Andrés2
    nombre: "Andrés",
    apellidoPaterno: "Coronado",
    apellidoMaterno: "Lázaro",
    sexo: "M",
    edad: 22,
    altura: 1.75,
    nacionalidad: "Mexicano",
    mostrar: function()
    {
        console.log( this.nombre + " " + this.apellidoPaterno );
        console.log( "Edad: " + this.edad );
    }
    },
    { //Miriam
    nombre: "Miriam",
    apellidoPaterno: "Herrera",
    apellidoMaterno: "Reyna",
    sexo: "F",
    edad: 21,
    altura: 1.6,
    nacionalidad: "Mexicana",
    mostrar: function()
    {
        console.log( this.nombre + " " + this.apellidoPaterno );
        console.log( "Edad: " + this.edad );
    }
    }
];

// window.onload = function()
// {
//     var main = document.getElementById("main")
//     for( var i = 0; i < Alumnos.length; i++ )
//     {
//         main.innerHTML += "<h4>" + Alumnos[i].nombre + " " + Alumnos[i].apellidoPaterno + "</h4>"
//     }
// }

window.onload = function()
{
    var main = document.getElementById("main")
    for( var i = 0; i < Alumnos.length; i++ )
    {
        main.innerHTML += 
        '<section>'+
                '<article class="centrado">' +          
'<div class="Gafete">'+

'<header class="P1">'+
'<div class="Perf centrado"></div>'+
'<div></div>'+
'<div class="LogoS center">'+
'</div>' +
'</header>' +
'<main class="P2">' +
'    <div class="Foto centrado"></div>'+
'    <div></div>'+
'    <div class="Nombre center">' + Alumnos[i].nombre + " " + Alumnos[i].apellidoPaterno +'</div>'+
'</main>'+
'<footer class="P3">' +
'    <div class="LogoC"></div>'+
'</footer>'+

'</div>'+
                '</article>'+
'<br></br>'+
        '</section>'
    }
}