var maestros=[
{
    // Kevin
    Nombre: "Kevin",
    Apellido: "Martin del Campo",
    Cumple: "14 de abril del 1995",
    Foto: "Imagenes/Usuario.png",
    NombreCompleto: function () {
        return (this.Nombre + " "+ this.Apellido);
    }
},

// Pato
{
Nombre:"Patrizzio",
Apellido: "Meded",
Cumple: "14 de abril del 1995",
Foto: "Imagenes/Usuario.png",
NombreCompleto: function () {
return this.Nombre + " "+ this.Apellido;
}
},
// saul cordoba
{
    Nombre: "Saul",
    Apellido: "Capibara",
    Cumple: "10 de Octubre del 1995",
    Foto: "Imagenes/Usuario.png",
    NombreCompleto: function () {
        return this.Nombre + " "+ this.Apellido;
    }
},
// Luis Robledo
{
    Nombre: "Luis",
    Apellido: "Robledo",
    Cumple: "2 de septiembre del 1994",
    Foto: "Imagenes/Usuario.png",
    NombreCompleto: function () {
        return this.Nombre + " "+ this.Apellido;
    }
},
// Emmanuel
{
    Nombre: "Emmanuel",
    Apellido: "Casanova",
    Cumple: "29 de octubre del 1993",
    Foto: "Imagenes/Usuario.png",
    NombreCompleto: function () {
        return this.Nombre + " "+ this.Apellido;
    }
},
// Julio coronado
{
    Nombre: "Julio",
    Apellido: "Coronado",
    Cumple: "14 de abril 1995",
    Foto: "Imagenes/Usuario.png",
    NombreCompleto: function () {
        return this.Nombre + " "+ this.Apellido;
    }
}

]

var alumnos=[

    {
   //  Carlos
        Nombre:"Carlos",
        ApellidoPaterno:"Mendoza",
        ApellidoMaterno:"Andrade",
        Cumple: "25 de abril 1997",
        Edad:22,
        Estatura: 1.80,
        Sexo: "H",
        Nacionalidad: "Mexicano",
        foto: "Imagenes/AlHombre.png",
        NombreCompleto: function(){
            return this.Nombre + " "+ this.ApellidoPaterno+" "+ this.ApellidoMaterno;
        },
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
       Cumple: "7 de febrero del 1997",
       Estatura: 1.72,
       Sexo: "M",
       Nacionalidad: "Mexicano",
       foto: "Imagenes/AlMujer.png",
       NombreCompleto: function(){
        return this.Nombre + " "+ this.ApellidoPaterno+" "+ this.ApellidoMaterno;
    },
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
       Cumple: "16 de septiembre 1999",
       Sexo: "M",
       Nacionalidad: "Mexicano",
       foto: "Imagenes/AlMujer.png",
       NombreCompleto: function(){
        return this.Nombre + " "+ this.ApellidoPaterno+" "+ this.ApellidoMaterno;
    },
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
       Cumple: "19 de octubre 1995",
       Sexo: "H",
       Nacionalidad: "Mexicano",
       foto: "Imagenes/AlHombre.png",
       NombreCompleto: function(){
        return this.Nombre + " "+ this.ApellidoPaterno+" "+ this.ApellidoMaterno;
    },
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
       Cumple: "23 de enero de 1999",
       Sexo: "H",
       Nacionalidad: "Mexicano",
       foto: "Imagenes/AlHombre.png",
       NombreCompleto: function(){
        return this.Nombre + " "+ this.ApellidoPaterno+" "+ this.ApellidoMaterno;
    },
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
       Cumple: "3 de noviembre de 1998",
       Sexo: "M",
       Nacionalidad: "Mexicano",
       foto: "Imagenes/AlMujer.png",
       NombreCompleto: function(){
        return this.Nombre + " "+ this.ApellidoPaterno+" "+ this.ApellidoMaterno;
    },
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
       Cumple: "7 de junio del 1997",
       Edad:22,
       Estatura: 1.56,
       Sexo: "M",
       Nacionalidad: "Mexicano",
       foto: "Imagenes/AlMujer.png",
       NombreCompleto: function(){
        return this.Nombre + " "+ this.ApellidoPaterno+" "+ this.ApellidoMaterno;
    },
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
       Cumple: "6 de agosto del 2000",
       Estatura: 1.60,
       Sexo: "H",
       Nacionalidad: "Colombiano",
       foto: "Imagenes/AlHombre.png",
       NombreCompleto: function(){
        return this.Nombre + " "+ this.ApellidoPaterno+" "+ this.ApellidoMaterno;
    },
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
       Cumple: "17 de octubre del 1998",
       Estatura: 1.70,
       Sexo: "H",
       Nacionalidad: "Mexicano",
       foto: "Imagenes/AlHombre.png",
       NombreCompleto: function(){
        return this.Nombre + " "+ this.ApellidoPaterno+" "+ this.ApellidoMaterno;
    },
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
       Cumple: "22 de mayo del 1998",
       Estatura: 1.77,
       Sexo: "H",
       Nacionalidad: "Mexicano",
       foto: "Imagenes/AlHombre.png",
       NombreCompleto: function(){
        return this.Nombre + " "+ this.ApellidoPaterno+" "+ this.ApellidoMaterno;
    },
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
       Cumple: "18 de noviembre del 1996",
       Estatura: 1.75,
       Sexo: "H",
       Nacionalidad: "Mexicano",
       foto: "Imagenes/AlHombre.png",
       NombreCompleto: function(){
        return this.Nombre + " "+ this.ApellidoPaterno+" "+ this.ApellidoMaterno;
    },
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
       Cumple: "9 de noviembre del 1997",
       Sexo: "M",
       Nacionalidad: "Mexicano",
       foto: "Imagenes/AlMujer.png",
       NombreCompleto: function(){
        return this.Nombre + " "+ this.ApellidoPaterno+" "+ this.ApellidoMaterno;
    },
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
       Cumple: "9 de marzo del 1996",
       Sexo: "H",
       Nacionalidad: "Mexicano",
       foto: "Imagenes/AlHombre.png",
       NombreCompleto: function(){
        return this.Nombre + " "+ this.ApellidoPaterno+" "+ this.ApellidoMaterno;
    },
       mostrar: function(){
           console.log(this.Nombre+" "+this.ApellidoPaterno);
           console.log("Edad: "+ this.Edad);
       }
   },

]

window.onload=function(){
var maestro= document.getElementById("maestro");
for(var i=0; i<maestros.length; i++){
    maestro.innerHTML += 
    '<div class="Tarjeta">'+
    '<section class="imagen">'+
    '<img src="'+maestros[i].Foto+'"/>'+
       ' </section>'+
        '<section class="Perfil">'+
        '<header>'+
       ' <h4 class="centrado">'+maestros[i].NombreCompleto()+ '</h4>'+
        '</header>'+
        '<main>'+
        '<h5 class="derecha">'+maestros[i].Cumple+'</h5>'+
        ' </main>'+
       ' <footer>'+
         '<p>'+
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum accusantium amet omnis, id quae'+
'  esse doloribus distinctio nam voluptate numquam mollitia quia quam eius dolore consequaturnesciunt alias temporibus est!'+
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsam excepturi nisi'+
                            'consectetur libero quidem explicabo accusamus cum debitis sunt voluptates facilis asperiores'+
                            'laboriosam officiis repudiandae ducimus vel, non officia.'+
                       ' </p>'+
                   ' </footer>'
                   
}

 var Alum = document.getElementById("Alum");
    for(var i=0; i<alumnos.length; i++){
        Alum.innerHTML+=
    '<div class="Tarjeta">'+
        '<section class="imagen">'+
            '<img src="'+alumnos[i].foto+'" />'+
       ' </section>'+
       ' <section class="Perfil">'+
           ' <header>'+
                '<h4 class="centrado">'+alumnos[i].NombreCompleto()+'</h4>'+
            '</header>'+
            '<main>'+
                '<h5 class="derecha">'+alumnos[i].Cumple+'</h5>'+
            '</main>'+
            '<footer>'+
                '<p>'+
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum accusantium amet omnis, id quae'+
                    'esse doloribus distinctio nam voluptate numquam mollitia quia quam eius dolore consequatur'+
                   ' nesciunt alias temporibus est!'+
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsam excepturi nisi'+
                    'consectetur libero quidem explicabo accusamus cum debitis sunt voluptates facilis asperiores'+
                    'la+boriosam officiis repudiandae ducimus vel, non officia.'+
               ' </p>'

            '</footer>'+
        '</section>'+
    '</div>'
    }

}

