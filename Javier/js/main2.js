//ejercicio Kevin
var Alumnos = [
    { //Celestino
        nombre: "Celestino",
        apellidoPaterno: "Gonzalez",
        apellidoMaterno: "Marquez",
        sexo: "masculino",
        edad: "23",
        altura: "...",
        nacionalidad: "MEXICANO",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)
        },
        src_pic: "../img/heroes/play-button.svg"
    },
    { //Itzel
        nombre: "Itzel",
        apellidoPaterno: "Alonso",
        apellidoMaterno: "Garcia",
        sexo: "femenino",
        edad: "22",
        altura: "1.72",
        nacionalidad: "mexicana",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)
        },
        src_pic: "../img/heroes/maternity.svg"
    },
    { //Liliana
        nombre: "Liliana",
        apellidoPaterno: "Hernandez",
        apellidoMaterno: "Gonzalez",
        sexo: "femenino",
        edad: "19",
        altura: "1.70",
        nacionalidad: "MEXICANA",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)
        },
        src_pic: "../img/heroes/taekwondo.svg"
    },
    { //Aldo
        nombre: "Aldo",
        apellidoPaterno: "Matias",
        apellidoMaterno: "Galindo",
        sexo: "masculino",
        edad: "23",
        altura: "1.77",
        nacionalidad: "MEXICANO",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)
        },
        src_pic: "../img/heroes/crab.svg"
    },
    { //Aaron
        nombre: "Aaron",
        apellidoPaterno: "Arredondo",
        apellidoMaterno: "Araguz",
        sexo: "masculino",
        edad: "20",
        altura: "1.74",
        nacionalidad: "MEXICANO",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)
        },
        src_pic: "../img/heroes/tennis.svg"
    },
    { //Karla
        nombre: "Karla",
        apellidoPaterno: "Gonzalez",
        apellidoMaterno: "Hernandez",
        sexo: "femenino",
        edad: "20",
        altura: "1.68",
        nacionalidad: "MEXICANA",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)
        },
        src_pic: "../img/heroes/watermelon.svg"
    },
    { //Natalia
        nombre: "Natalia",
        apellidoPaterno: "Rodriguez",
        apellidoMaterno: "Capitan",
        sexo: "femenino",
        edad: "22",
        altura: "1.56",
        nacionalidad: "MEXICANA",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)
        },
        src_pic: "../img/heroes/vincent-van-gogh.svg"
    },
    { //Andres
        nombre: "Andres",
        apellidoPaterno: "Ramos",
        apellidoMaterno: "Rodriguez",
        sexo: "masculino",
        edad: "19",
        altura: "1.60",
        nacionalidad: "COLOMBIANO",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)
        },
        src_pic: "../img/heroes/colombia.svg"
    },
    { //Ricardo
        nombre: "Ricardo",
        apellidoPaterno: "Teneyuque",
        apellidoMaterno: "Marquez",
        sexo: "masculino",
        edad: "20",
        altura: "1.70",
        nacionalidad: "MEXICANO",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)
        },
        src_pic: "../mg/heroes/lion.svg"
    },
    { //Sho
        nombre: "Javier",
        apellidoPaterno: "Anguiano",
        apellidoMaterno: "de Lara",
        sexo: "masculino",
        edad: "21",
        altura: "1.78",
        nacionalidad: "MEXICANO",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)
        },
        src_pic: "../img/heroes/spiderman.svg"
    },
    { //Charles
        nombre: "Carlos",
        apellidoPaterno: "Mendoza",
        apellidoMaterno: "Andrade",
        sexo: "masculino",
        edad: "22",
        altura: "1.78",
        nacionalidad: "MEXICANO",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)
        },
        src_pic: "../img/gaffete/sho.png"
    },
    { //Andrew
        nombre: "Andres",
        apellidoPaterno: "Coronado",
        apellidoMaterno: "Lazaro",
        sexo: "masculino",
        edad: "2",
        altura: "...",
        nacionalidad: "MEXICANO",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)
        },
        src_pic: "../img/heroes/saitama-japan-flag-symbol.svg"
    },
    { //Miriam
        nombre: "Miriam",
        apellidoPaterno: "Herrera",
        apellidoMaterno: "Reyna",
        sexo: "femenina",
        edad: "21",
        altura: "1.60",
        nacionalidad: "MEXICANA",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)
        },
        src_pic: "../img/heroes/baloon.svg"
    },
];
// alert(Alumnos.length);

window.onload = function(){
    var main = document.getElementById("main");
    for(var i=0; i<Alumnos.length; i++){
        main.innerHTML += 
        
        '<section id="gaffete">' + 
        '<header class="softtek">' +
            '<div id="entrada"></div>' + 
            '<img src="../img/gaffete/logo.webp" id="logo-sof">' +
        '</header>' +
        '<main class="info-p">' +
            '<img src=' + Alumnos[i].src_pic + '    alt=""  >' +
            '<article class="nombre">' +
                '<p>' +
                    '<h4>' + Alumnos[i].nombre + " " + Alumnos[i].apellidoPaterno + '</h4>' +
                '</p>' +
            '</article>' +
        '</main>' +
        '<footer class="code">' +
            '<img src="../img/gaffete/sofftek-fondo.png" alt="" id="logo-codellege">' +
        '</footer>' +
    '</section>'

    }
}   