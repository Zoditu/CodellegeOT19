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
        fecha_nac: "desconocida",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)
        },
        src_pic: "../../img/heroes/play-button.svg"
    },
    { //Itzel
        nombre: "Itzel",
        apellidoPaterno: "Alonso",
        apellidoMaterno: "Garcia",
        sexo: "femenino",
        edad: "22",
        altura: "1.72",
        nacionalidad: "mexicana",
        fecha_nac: "7 Febrero 1997",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)
        },
        src_pic: "../../img/heroes/maternity.svg"
    },
    { //Liliana
        nombre: "Liliana",
        apellidoPaterno: "Hernandez",
        apellidoMaterno: "Gonzalez",
        sexo: "femenino",
        edad: "19",
        altura: "1.70",
        nacionalidad: "MEXICANA",
        fecha_nac: "16 Septiembre 1999",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)
        },
        src_pic: "../../img/heroes/taekwondo.svg"
    },
    { //Aldo
        nombre: "Aldo",
        apellidoPaterno: "Matias",
        apellidoMaterno: "Galindo",
        sexo: "masculino",
        edad: "23",
        altura: "1.77",
        nacionalidad: "MEXICANO",
        fecha_nac: "19 Octubre 1995",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)
        },
        src_pic: "../../img/heroes/crab.svg"
    },
    { //Aaron
        nombre: "Aaron",
        apellidoPaterno: "Arredondo",
        apellidoMaterno: "Araguz",
        sexo: "masculino",
        edad: "20",
        altura: "1.74",
        nacionalidad: "MEXICANO",
        fecha_nac: "23 Enero 1999",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)
        },
        src_pic: "../../img/heroes/tennis.svg"
    },
    { //Karla
        nombre: "Karla",
        apellidoPaterno: "Gonzalez",
        apellidoMaterno: "Hernandez",
        sexo: "femenino",
        edad: "20",
        altura: "1.68",
        nacionalidad: "MEXICANA",
        fecha_nac: "3 noviembre 1998",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)
        },
        src_pic: "../../img/heroes/watermelon.svg"
    },
    { //Natalia
        nombre: "Natalia",
        apellidoPaterno: "Rodriguez",
        apellidoMaterno: "Capitan",
        sexo: "femenino",
        edad: "22",
        altura: "1.56",
        nacionalidad: "MEXICANA",
        fecha_nac: "7 junio 1996",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)
        },
        src_pic: "../../img/heroes/vincent-van-gogh.svg"
    },
    { //Andres
        nombre: "Andres",
        apellidoPaterno: "Ramos",
        apellidoMaterno: "Rodriguez",
        sexo: "masculino",
        edad: "19",
        altura: "1.60",
        nacionalidad: "COLOMBIANO",
        fecha_nac: "desconocida",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)
        },
        src_pic: "../../img/heroes/colombia.svg"
    },
    { //Ricardo
        nombre: "Ricardo",
        apellidoPaterno: "Teneyuque",
        apellidoMaterno: "Marquez",
        sexo: "masculino",
        edad: "20",
        altura: "1.70",
        nacionalidad: "MEXICANO",
        fecha_nac: "17 Octubre 1998",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)
        },
        src_pic: "../../img/heroes/lion.svg"
    },
    { //Sho
        nombre: "Javier",
        apellidoPaterno: "Anguiano",
        apellidoMaterno: "de Lara",
        sexo: "masculino",
        edad: "21",
        altura: "1.78",
        nacionalidad: "MEXICANO",
        fecha_nac: "22 mayo 1998",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)
        },
        src_pic: "../../img/heroes/spiderman.svg"
    },
    { //Charles
        nombre: "Carlos",
        apellidoPaterno: "Mendoza",
        apellidoMaterno: "Andrade",
        sexo: "masculino",
        edad: "22",
        altura: "1.78",
        nacionalidad: "MEXICANO",
        fecha_nac: "25 abril 1997",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)
        },
        src_pic: "../../img/gaffete/sho.png"
    },
    { //Andrew
        nombre: "Andres",
        apellidoPaterno: "Coronado",
        apellidoMaterno: "Lazaro",
        sexo: "masculino",
        edad: "2",
        altura: "...",
        nacionalidad: "MEXICANO",
        fecha_nac: "18 Noviembre 1999",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)
        },
        src_pic: "../../img/heroes/saitama-japan-flag-symbol.svg"
    },
    { //Miriam
        nombre: "Miriam",
        apellidoPaterno: "Herrera",
        apellidoMaterno: "Reyna",
        sexo: "femenina",
        edad: "21",
        altura: "1.60",
        nacionalidad: "MEXICANA",
        fecha_nac: "",
        mostrar: function () {
            console.log(this.nombre + " " + this.apellidoPaterno);
            console.log("Edad:" + this.edad)
        },
        src_pic: "../../img/heroes/baloon.svg"
    },
];

var Maestros = [
    {//Kevin
        nombre:"Kevin",
        apellidoP:"Martin Del Campo",
        dia: 14,
        mes: "Abril",
        año:1995,
        imagen:"../../img/heroes/fox.svg",
        
    },
    {//Pato
        nombre:"Patrizzio",
        apellidoP:"Torres",
        dia:19,
        mes:"Mayo",
        año:1995,
        imagen:"../../img/heroes/duck.svg",
    },
    {//Julio
        nombre:"Julio",
        apellidoP:"Coronado",
        dia:5,
        mes:"Diciembre",
        año:1984,
        imagen:"../../img/heroes/dawn.svg",
    },
    {//Emma
        nombre:"Emanuel",
        apellidoP:"Casanova",
        dia:29,
        mes:"Octubre",
        año:1993,
        imagen:"../../img/heroes/batman.svg",
    },
];

window.onload = function(){
    var main = document.getElementById("main");
    for(var i=0; i<Alumnos.length; i++){
        main.innerHTML += 
        '<div class="card-b">' +
                    '<section class="info-pic">' +
                    '<img src=' + Alumnos[i].src_pic + '    alt=""  >' +
                    '</section>' +
                    '<section class="info-prof">' +
                        '<header class="centrado">' +
                            '<h4>' + Alumnos[i].nombre + " " + Alumnos[i].apellidoPaterno + '</h4>' +
                        '</header>' +
                        '<main class="derecha"> ' + Alumnos[i].fecha_nac + ' </main>' +
                        '<footer>' +
                            '<h6>Hobbies:' +
                                '<hr>' +
                            '</h6>' +
                            "<p>Lorem ipsum dolor sit amet consectetur,                                adipisicing elit. Rem quae a quo neque perferendis,                                reiciendis qui, officia aut numquam, alias modi soluta earum voluptatum expedita est doloribus consequuntur quibusdam odit !</p>" +
                        '</footer>' +
                    '</section>' +
                    '<div class="clear"></div>' +
                '</div>'
    }

    var main = document.getElementById("maestros");
    for(var i=0; i<Maestros.length; i++){
        maestros.innerHTML += 
        '<div class="card-b">' +
                    '<section class="info-pic">' +
                    '<img src=' + Maestros[i].imagen + '    alt=""  >' +
                    '</section>' +
                    '<section class="info-prof">' +
                        '<header class="centrado">' +
                            '<h4>' + Maestros[i].nombre + " " + Maestros[i].apellidoP + '</h4>' +
                        '</header>' +
                        '<main class="derecha"> ' + Maestros[i].dia + " " + Maestros[i].mes + " " + Maestros[i].año +    ' </main>' +
                        '<footer>' +
                            '<h6>Hobbies:' +
                                '<hr>' +
                            '</h6>' +
                            "<p>Lorem ipsum dolor sit amet consectetur,adipisicing elit. Rem quae a quo neque perferendis,reiciendis qui, officia aut numquam, alias modi soluta earum voluptatum expedita est doloribus consequuntur quibusdam odit !</p>" +
                        '</footer>' +
                    '</section>' +
                    '<div class="clear"></div>' +
                '</div>'
    }
}