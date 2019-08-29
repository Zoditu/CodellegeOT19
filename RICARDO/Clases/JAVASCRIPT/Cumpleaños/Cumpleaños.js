var Alumnos = [{ //Celestino
        nombre: "Celestino",
        apellidoPaterno: "González",
        apellidoMaterno: "Márquez",
        sexo: "M",
        edad: 23,
        altura: "...",
        nacionalidad: "Mexicano",
        img: "imagenes/imh1.jpg",
        cum: "09 Marzo 1996",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad: " + this.edad);
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
        img: "imagenes/imm1.jpg",
        cum: "7 Febrero 1997",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad: " + this.edad);
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
        img: "imagenes/imm2.jpg",
        cum: "16 Septiembre 1999",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad: " + this.edad);
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
        img: "imagenes/imh2.jpg",
        cum: "19 Octubre 1995",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad: " + this.edad);
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
        img: "imagenes/imh3.jpg",
        cum:"23 Enero 1999",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad: " + this.edad);
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
        img: "imagenes/imm3.jpg",
        cum: "3 noviembre 1998",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad: " + this.edad);
        }
    },
    { //Natalia
        nombre: "Natalia",
        apellidoPaterno: "Rodriguez",
        apellidoMaterno: "Capitán",
        sexo: "F",
        edad: 22,
        altura: 1.56,
        img: "imagenes/imm4.jpg",
        cum:"7 junio 1996",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad: " + this.edad);
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
        img: "imagenes/imh4.jpg",
        cum:"06 agosto",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad: " + this.edad);
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
        img: "imagenes/imh5.jpg",
        cum:"17 Octubre 1998",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad: " + this.edad);
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
        img: "imagenes/imh6.jpg",
        cum:"22 mayo 1998",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad: " + this.edad);
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
        img: "imagenes/imh7.jpg",
        cum:"25 abril 1997",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad: " + this.edad);
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
        img: "imagenes/imh8.jpg",
        cum:"18 Noviembre 1999",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad: " + this.edad);
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
        img: "imagenes/imm5.jpg",
        cum:"09 Noviembre 1997",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad: " + this.edad);
        }
    }
];
var maestros = [
{
    nombre:"Kevin",
    apellidoP:"Martin Del Campo",
    cum: "14 abril 1995",
    imagen:"imagenes/im1.jpg",
},
{
    nombre:"Patrizzio",
    apellidoP:"Torres",
    cum:"19 mayo 1995",
    imagen:"imagenes/im2.jpg",
},
{
    nombre:"Julio",
    apellidoP:"Coronado",
    cum:"5 diciembre 1984",
    imagen:"imagenes/im3.jpg",
},
{
    nombre:"Emanuel",
    apellidoP:"Casanova",
    cum:"29 octubre 1993",
    imagen:"imagenes/im4.jpg",
},
]
// window.onload = function()
// {
//     var main = document.getElementById("main")
//     for( var i = 0; i < Alumnos.length; i++ )
//     {
//         main.innerHTML += "<h4>" + Alumnos[i].nombre + " " + Alumnos[i].apellidoPaterno + "</h4>"
//     }
// }

window.onload = function () {
    var main = document.getElementById("main")
    for (var i = 0; i < Alumnos.length; i++) {
        
        main.innerHTML +=
            '<div class = "Tarjeta" >'+
            '<div class = "Foto" >'+
               ' <img src = "'+ Alumnos[i].img+'"/>'+
           ' </div> '+
            '<div Class = "InfoPerfil" >'+
            '<header class = "HInfo" >'+
            '<h4 class = "Centrado" >'  + Alumnos[i].nombre + " " + Alumnos[i].apellidoPaterno + '</h4>'+
            '</header> '+
            '<main class = "MInfo" >'+
            '<h5 class = "Derecha" >' + Alumnos[i].cum + '</h5> '+
            '</main> '+
            '<footer class = "FInfo" >'+
           ' <p>'+
           ' Lorem ipsum dolor sit amet consectetur adipisicing elit.Cum accusantium amet omnis, id quae esse doloribus distinctio nam voluptate numquam mollitia quia quam eius dolore consequatur nesciunt alias temporibus est!'+
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.Rerum ipsam excepturi nisi consectetur libero quidem explicabo accusamus cum debitis sunt voluptates facilis asperiores laboriosam officiis repudiandae ducimus vel, non officia.'+
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Deserunt blanditiis alias quas quod tempore aperiam laboriosam officia explicabo ? Unde reiciendis quis aspernatur quibusdam nihil perspiciatis ipsum corporis aliquam nemo magni.'+
        '</p> '+
        '</footer> '+
        '</div></div>'
    }
        var main2 = document.getElementById("main2")
    for (var i = 0; i < maestros.length; i++) {
        
        main2.innerHTML +=
            '<div class = "Tarjeta" >'+
            '<div class = "Foto" >'+
               ' <img src = "'+ maestros[i].imagen+'"/>'+
           ' </div> '+
            '<div Class = "InfoPerfil" >'+
            '<header class = "HInfo" >'+
            '<h4 class = "Centrado" >'  + maestros[i].nombre + " " + maestros[i].apellidoP + '</h4>'+
            '</header> '+
            '<main class = "MInfo" >'+
            '<h5 class = "Derecha" > ' + maestros[i].cum + ' </h5> '+
            '</main> '+
            '<footer class = "FInfo" >'+
           ' <p>'+
           ' Lorem ipsum dolor sit amet consectetur adipisicing elit.Cum accusantium amet omnis, id quae esse doloribus distinctio nam voluptate numquam mollitia quia quam eius dolore consequatur nesciunt alias temporibus est!'+
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.Rerum ipsam excepturi nisi consectetur libero quidem explicabo accusamus cum debitis sunt voluptates facilis asperiores laboriosam officiis repudiandae ducimus vel, non officia.'+
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Deserunt blanditiis alias quas quod tempore aperiam laboriosam officia explicabo ? Unde reiciendis quis aspernatur quibusdam nihil perspiciatis ipsum corporis aliquam nemo magni.'+
        '</p> '+
        '</footer> '+
        '</div></div>'
    }
}