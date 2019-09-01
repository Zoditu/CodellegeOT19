
var Alumnos = [
    {//celestino
        pic: "imagenes/paniños.jpg",
        nombre:'Celestino',
        apellidos:'González',
        edad:66,
        sexo:'h',
        altura:160,
        nacionalidad:'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//itzel
        pic: "imagenes/paniñas.jpg",
        nombre:'Itzel',
        apellidos:'Alonso',
        edad: 22,
        sexo: 'm',
        altura: 170,
        nacionalidad:'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//lili
        pic: "imagenes/paniñas.jpg",
        nombre:'Liliana',
        apellidos:'Hernández',
        edad: 19,
        sexo: 'm',
        altura: 170,
        nacionalidad: 'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//aldo
        pic: "imagenes/paniños.jpg",
        nombre:'Aldo',
        apellidos:'Matias',
        edad: 23 ,
        sexo: 'h',
        altura: 177,
        nacionalidad: 'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//aaron
        pic: "imagenes/paniños.jpg",
        nombre:'Aaron',
        apellidos:'Arredondo',
        edad: 20,
        sexo: 'h',
        altura: 174,
        nacionalidad:'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//karla
        pic: "imagenes/paniñas.jpg",
        nombre:'Karla',
        apellidos:'González',
        edad: 20,
        sexo: 'm',
        altura: 148,
        nacionalidad:'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//natalia
        pic: "imagenes/paniñas.jpg",
        nombre:'Natalia',
        apellidos:'Rodriguez',
        edad: 22,
        sexo: 'm',
        altura: 156,
        nacionalidad:'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//andy
        pic: "imagenes/paniños.jpg",
        nombre:'Andy',
        apellidos:'Escobar',
        edad: 19,
        sexo: 'h',
        altura: 160,
        nacionalidad:'colombiana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//richard
        pic: "imagenes/paniños.jpg",
        nombre:'Richard',
        apellidos:'Webber',
        edad: 20,
        sexo: 'h',
        altura: 170,
        nacionalidad:'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//javo
        pic: "imagenes/paniños.jpg",
        nombre:'Javo',
        apellidos:'Anguiano',
        edad: 21,
        sexo: 'h',
        altura: 177,
        nacionalidad:'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        } 
    },
    {//charles
        pic: "imagenes/paniños.jpg",
        nombre:'Charles',
        apellidos:'Mendoza',
        edad: 22,
        sexo: 'h',
        altura: 178,
        nacionalidad:'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        } 
    },
    {//andrew
        pic: "imagenes/paniños.jpg",
        nombre:'Andrew',
        apellidos:'Coronado',
        edad: 22,
        sexo: 'h',
        altura: 175,
        nacionalidad:'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        } 
    },
    {//miriam
        pic: "imagenes/paniñas.jpg",
        nombre:'Miriam',
        apellidos:'Herrera',
        edad: 21,
        sexo: 'm',
        altura: 165,
        nacionalidad:'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        } 
    }
];






window.onload = function(){                     //todo se ejecuta despues de haber cargado la pagina
    var main = document.getElementById('main'); //me traigo el elemento
    for( var i=0; i<Alumnos.length; i++){
        main.innerHTML +=  
            '<div id="gaffete">'+
    
               ' <article class="arriba">'+
                   ' <section>'+
                            '<div class="hoyo"></div>'+
                   ' </section>'+
                   ' <section class="logo">'+
                        '<img src="imagenes/SofttekWebLogo-1ink.png" alt="Logo Sofftek">'+
                    '</section>'+
                '</article>'+
    
    
    
                '<article class="enmedio">'+
                   ' <section class="foto">'+
                            '<img src="'+Alumnos[i].pic+'" alt="iop">'+
                    '</section>'+
                   ' <section class="nombre">'+
                        '<h1 class="center">'+ Alumnos[i].nombre +' '+ Alumnos[i].apellidos+'</h1>'+
                    '</section>'+
               ' </article>'+
    
    
    
               ' <article class="abajo">'+
                    '<section class="logocodellege">'+
                       ' <img src="imagenes/codellege2.png" alt="">'+
                   ' </section>'+
               ' </article>'+
    
    
            '</div>'+'<br>'

    }
}
     

