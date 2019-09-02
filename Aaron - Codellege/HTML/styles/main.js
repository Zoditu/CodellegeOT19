var alumnos = [
    "Aaron Arredondo",
    "Karla GH",
    "Javier Anguiano",
    "Ricardo Teneyuque",
    "Aldo Matias",
    "Andrés Coronado",
    "Andrés Ramos",
    "Itzel Alonso",
    "Miriam Herrera",
    "Carlos Mendoza",
    "Celestino Gozales"
];




window.onload = function () {
    var main = document.getElementById("body");
    var section = document;

    for (var i=0; i<alumnos.length; i++) {
        main.innerHTML +=
        '<article class="gafete">' +
        '<header>' +
            '<section id="agujero">' +
                    '<div id="agujero1"></div>' +
            '</section>' +
            '<section id="logo">' +
                    '<div id="logo1"><img src="http://www.softtek.com/stkignite/img/logo-soft.png" alt=""></div>' +
            '</section>' +
        '</header>' +
        '<main>' +
            '<section id="foto">' +
                '<div id="foto1"><img src="img/perfil.png" alt=""></div>' +
            '</section>' +
            '<section id="nombre">' +
                '<div id="nombre1">' + alumnos[i] + '</div>' +
            '</section>' +
        '</main>' +
        '<footer>' +
            '<section id="logoC">' +
                '<div id="logoC1"><img src="img/logo.svg" alt=""></div>' +
            '</section>'+
        '</footer>' +

    '</article>';
    }
}