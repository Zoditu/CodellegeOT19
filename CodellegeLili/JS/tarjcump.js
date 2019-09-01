var Alumnos = [
    {//celestino
        pic: "imagenes/paniños.jpg",
        nombre:'Celestino González',
        edad:22,
        sexo:'h',
        altura:162,
        nacionalidad:'mexicana',
        fecha: '9/marzo',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//itzel
        pic: "imagenes/paniñas.jpg",
        nombre:'Itzel Alonso',
        edad: 22,
        sexo: 'm',
        altura: 170,
        nacionalidad:'mexicana',
        fecha: '2/enero',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//lili
        pic: "imagenes/paniñas.jpg",
        nombre:'Liliana Hernández',
        edad: 19,
        sexo: 'm',
        altura: 169,
        nacionalidad: 'mexicana',
        fecha: '16/septiembre',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//aldo
        pic: "imagenes/paniños.jpg",
        nombre:'Aldo Matias',
        edad: 23,
        sexo: 'h',
        altura: 177,
        nacionalidad: 'mexicana',
        fecha:' 19/octubre',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//aaron
        pic: "imagenes/paniños.jpg",
        nombre:'Aaron Arredondo',
        edad: 20,
        sexo: 'h',
        altura: 174,
        nacionalidad:'mexicana',
        fecha: '23/febrero',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//karla
        pic: "imagenes/paniñas.jpg",
        nombre:'Karla González',
        edad: 20,
        sexo: 'm',
        altura: 148,
        nacionalidad:'mexicana',
        fecha: '3/noviembre',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//natalia
        pic: "imagenes/paniñas.jpg",
        nombre:'Natalia Rodríguez',
        edad: 22,
        sexo: 'm',
        altura: 156,
        nacionalidad:'mexicana',
        fecha: '7/junio',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//andy
        pic: "imagenes/paniños.jpg",
        nombre:'Andy Escobar',
        edad: 19,
        sexo: 'h',
        altura: 160,
        nacionalidad:'colombiana',
        fecha: '3/agosto',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//richard
        pic: "imagenes/paniños.jpg",
        nombre:'Richard Webber',
        edad: 20,
        sexo: 'h',
        altura: 170,
        nacionalidad:'mexicana',
        fecha: '17/abril',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//javo
        pic: "imagenes/paniños.jpg",
        nombre:'Javo Anguiano',
        edad: 21,
        sexo: 'h',
        altura: 177,
        nacionalidad:'mexicana',
        fecha: '22/mayo',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        } 
    },
    {//charles
        pic: "imagenes/paniños.jpg",
        nombre:'Charles Mendoza',
        edad: 22,
        sexo: 'h',
        altura: 178,
        nacionalidad:'mexicana',
        fecha: '25/abril',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        } 
    },
    {//andrew
        pic: "imagenes/paniños.jpg",
        nombre:'Andrew Coronado',
        edad: 22,
        sexo: 'h',
        altura: 175,
        nacionalidad:'mexicana',
        fecha: '18/noviembre' ,
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        } 
    },
    {//miriam
        pic: "imagenes/paniñas.jpg",
        nombre:'Miriam Herrera',
        edad: 21,
        sexo: 'm',
        altura: 165,
        nacionalidad:'mexicana',
        fecha: '9/noviembre',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        } 
    }
];
var Maestros =[
    {//kevin
        pic: 'imagenes/niño.png',
        nombre: 'Kevin Martin del Campo',
        fecha: '14/04/95'
    },
    {//yulius
        pic: 'imagenes/niño.png',
        nombre: 'Julio coronado', 
        fecha: '23/07/1999'
    },
    {//pato
        pic: 'imagenes/niño.png',
        nombre: 'Patricio Gonzalez', 
        fecha: '4/09/1970'
    },
    {//saul
        pic: 'imagenes/niño.png',
        nombre: 'Saul Gomez' , 
        fecha: '55/88/3755'
    },
    {//em
        pic: 'imagenes/niño.png',
        nombre: 'Emanuel Casanova', 
        fecha: '45/66/7473'
    },
    {//david
        pic: 'imagenes/niño.png',
        nombre: 'David Perez' , 
        fecha: '33/67/2345'
    }
];


window.onload = function(){                     
    var main = document.getElementById('main'); 
    for( var i=0; i<Maestros.length; i++){
        main.innerHTML +=  
        '<div class="tarjeta">'+
        '<section class="imagen">'+
            '<img src="'+Maestros[i].pic+'">'+
        '</section>'+

        '<section class="datos">'+
            '<header>'+
               ' <h1>'+Maestros[i].nombre+'</h1>'+
            '</header>'+
            '<main>'+
                '<p class="derecha">'+Maestros[i].fecha+'</p>'+
            '</main>'+
           '<footer>'+
                '<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo architecto fugiat maxi'+
                   ' asperiores nostrum explicabo, consectetur dolore adipisci rem velit eum ex molestiae'+
                   ' aliquam delectus, quae est omnis dicta? Lorem ipsum dolor sit amet consectetur adipisicing'+
                    'elit. Quaerat repudiandae consequuntur suscipit eum deleniti et repellendus aliquam quod,'+
                    'sunt aperiam omnis, at iste ducimus delectus laborum earum, dolore recusandae! Lorem ipsum'+
                   ' dolor sit amet consectetur adipisicing elit. Quaerat dolore alias sapiente porro nesciunt'+
                    'natus quo soluta doloribus consectetur, perferendis maiores error libero at similique'+
                    'possimus eius magnam nobis dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing'+
                    'elit. Aut delectus quis alias adipisci animi perferendis provident illo, harum quisquam'+
                    'accusantium ipsam explicabo aperiam ad dolores saepe quod veritatis porro. Sapiente?</p>'+
           ' </footer>'+
       ' </section>'+

    '</div>'

    }


var main2 = document.getElementById('main2'); 
for( var i=0; i<Alumnos.length; i++){
    main2.innerHTML += 
    '<div class="tarjeta">'+
        '<section class="imagen">'+
            '<img src="'+Alumnos[i].pic+'">'+
        '</section>'+

        '<section class="datos">'+
            '<header>'+
               ' <h1>'+Alumnos[i].nombre+'</h1>'+
            '</header>'+
            '<main>'+
                '<p class="derecha">'+Alumnos[i].fecha+'</p>'+
            '</main>'+
           '<footer>'+
                '<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo architecto fugiat maxi'+
                   ' asperiores nostrum explicabo, consectetur dolore adipisci rem velit eum ex molestiae'+
                   ' aliquam delectus, quae est omnis dicta? Lorem ipsum dolor sit amet consectetur adipisicing'+
                    'elit. Quaerat repudiandae consequuntur suscipit eum deleniti et repellendus aliquam quod,'+
                    'sunt aperiam omnis, at iste ducimus delectus laborum earum, dolore recusandae! Lorem ipsum'+
                   ' dolor sit amet consectetur adipisicing elit. Quaerat dolore alias sapiente porro nesciunt'+
                    'natus quo soluta doloribus consectetur, perferendis maiores error libero at similique'+
                    'possimus eius magnam nobis dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing'+
                    'elit. Aut delectus quis alias adipisci animi perferendis provident illo, harum quisquam'+
                    'accusantium ipsam explicabo aperiam ad dolores saepe quod veritatis porro. Sapiente?</p>'+
           ' </footer>'+
       ' </section>'+

    '</div>'
    }
}