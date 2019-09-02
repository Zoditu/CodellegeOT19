var alumnos = [
    {name: "Aaron Arredondo", birthday: "23 de Enero"},
    {name: "Natalia Capitán", birthday: "7 de Junio"},
    {name: "Karla GH", birthday: "3 de Noviembre"},
    {name: "Aldo Matias", birthday: "19 de Octubre"},
    {name: "Ricardo Teneyuque", birthday: "17 de Octubre"},
    {name: "Javier Anguiano", birthday: "22 de Mayo"},
    {name: "Andrés Coronado", birthday: "18 de Noviembre"},
    {name: "Miriam Herrera", birthday: "9 de Noviembre"},
    {name: "Celestino Gónzalez", birthday: "9 de Marzo"},
    {name: "Carlos Mendoza", birthday: "25 de Abril"},
    {name: "Liliana Hernández", birthday: "16 de Septiembre"}
];

var maestros = [
    {name: "Kevin del Campo"},
    {}
];

window.onload = function() {
    var main = document.getElementById("main");
    var section = document;

    for (var i=0; i<alumnos.length; i++) {
        main.innerHTML +=
        '<article class="maestros">' +
        '<section class="tarjeta">' +
            '<div class="imagen">' +
                '<img src="https://hackernoon.com/hn-images/1*zm5NLjdhGd3VVTA2u-xEPg.gif" alt="">' +
            '</div>' +
            '<div class="datos">' +
                '<header>' +
                    '<h3 class="centrado">' + alumnos[i].name +'</h3></header>' +
                '<main>' +
                    '<h5 class="derecha">' + alumnos[i].birthday + '</h5></main>' +
                '<footer>' +
                    '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias numquam fuga nisi ut voluptate nesciunt ex alias recusandae quae! Assumenda aperiam vitae repudiandae quia obcaecati. Natus tempore assumenda optio quo? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam incidunt consectetur debitis asperiores aliquam veritatis quia ab architecto voluptates, qui quam maiores dolorum necessitatibus assumenda accusamus corporis neque accusantium rerum.</p>' +
                '</footer>' +
            '</div>' +
            '<div class="clear"></div>' +
        '</section>' +
    '</article>';
    }
}