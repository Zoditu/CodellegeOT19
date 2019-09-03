var alumnos = [{
        //itzel
        nombre: "Itzel",
        apellidoPaterno: "alonso",
        apellidoMaterno: "Garcia",
        edad: 22,
        estatura: 1.72,
        sexo: "M",
        mostrar: function () {
            console.log(this.nombre + "" + this.apellidoPaterno);
            console.log("edad: " + this.edad);
        }
    },

    {
        nombre: "lili",
        apellidoPaterno: "Herndandez",
        apellidoMaterno: "Gonzazles",
        edad: 19,
        estatura: 1.70,
        sexo: "M",
        mostrar: function () {
            console.log(this.nombre + "" + this.apellidoPaterno);
            console.log("edad: " + this.edad);
        }
    },

    {
        nombre: "Aldo ",
        apellidoPaterno: "Matias",
        apellidoMaterno: "Galindo",
        edad: 23,
        estatura: 1.77,
        sexo: "H",
        mostrar: function () {
            console.log(this.nombre + "" + this.apellidoPaterno);
            console.log("edad: " + this.edad);
        }
    },

    {
        nombre: "Aaron",
        apellidoPaterno: "Aredondo",
        apellidoMaterno: "zaragus",
        edad: 20,
        estatura: 1.74,
        sexo: "H",
        mostrar: function () {
            console.log(this.nombre + "" + this.apellidoPaterno);
            console.log("edad: " + this.edad);
        }
    },

    {
        nombre: "Karla",
        apellidoPaterno: "Gonzales ",
        apellidoMaterno: "hernandez",
        edad: 20,
        estatura: 1.68,
        sexo: "M",
        mostrar: function () {
            console.log(this.nombre + "" + this.apellidoPaterno);
            console.log("edad: " + this.edad);
        }
    },


    {
        nombre: "Natalia",
        apellidoPaterno: "Rodrigues",
        apellidoMaterno: "Capitan",
        edad: 22,
        estatura: 1.53,
        sexo: "M",
        mostrar: function () {
            console.log(this.nombre + "" + this.apellidoPaterno);
            console.log("edad: " + this.edad);
        }
    },


    {
        nombre: "Andres",
        apellidoPaterno: "Ramos",
        apellidoMaterno: "",
        edad: 19,
        estatura: 1.60,
        sexo: "H",
        nacionalidad: "Colombiano",
        mostrar: function () {
            console.log(this.nombre + "" + this.apellidoPaterno);
            console.log("edad: " + this.edad);
        }
    },


    {
        nombre: "Ricardo",
        apellidoPaterno: "Teneyuque",
        apellidoMaterno: "Puerta",
        edad: 20,
        estatura: 1.70,
        sexo: "H",
        mostrar: function () {
            console.log(this.nombre + "" + this.apellidoPaterno);
            console.log("edad: " + this.edad);
        }
    },

    {
        nombre: "Javier",
        apellidoPaterno: "Anguano",
        apellidoMaterno: "de lara",
        edad: 21,
        estatura: 1.77,
        sexo: "H",
        mostrar: function () {
            console.log(this.nombre + "" + this.apellidoPaterno);
            console.log("edad: " + this.edad);
        }
    },

    {
        nombre: "Carlos",
        apellidoPaterno: "Mendoza",
        apellidoMaterno: "Andrade",
        edad: 22,
        estatura: 1.77,
        sexo: "H",
        mostrar: function () {
            console.log(this.nombre + "" + this.apellidoPaterno);
            console.log("edad: " + this.edad);
        }
    },

    {
        nombre: "Andres",
        apellidoPaterno: "Coronado",
        apellidoMaterno: "Lazaro",
        edad: 22,
        estatura: 1.75,
        sexo: "H",
        mostrar: function () {
            console.log(this.nombre + "" + this.apellidoPaterno);
            console.log("edad: " + this.edad);
        }
    },

    {
        nombre: "Miriam",
        apellidoPaterno: "Herrera",
        apellidoMaterno: "Reyna ",
        edad: 21,
        estatura: 1.60,
        sexo: "M",
        mostrar: function () {
            console.log(this.nombre + "" + this.apellidoPaterno);
            console.log("edad: " + this.edad);
        }
    }

];



window.onload = function (ev) {
    var main = document.getElementById("main");
    for (var i = 0; i < alumnos.length; i++) //i=i+1
    {
        main.innerHTML += "<h4>" + alumnos[i].nombre + "" + alumnos[i].apellidoPaterno + "</h4>";
    }
}