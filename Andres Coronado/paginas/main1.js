var maestros=[

{
        nombre:"Kevin",
        apellidoP:"Martin Del Campo",
        dia: 14,
        mes: "Abril",
        año:1995,
        regalo:"Lampreza WRX STI",
        imagen:"img/kevin.jpeg",
        fortaleza:"Saberlo Todo",
        nombre_comp: function () 
    {
       return this.nombre+""+this.apellidoPaterno+""+this.apellidoMaterno;
    }
    },
    {
        nombre:"Patrizzio",
        apellidoP:"Torres",
        dia:19,
        mes:"Mayo",
        año:1995,
        regalo:"Recuperar su Vocho",
        imagen:"img/pato.jpeg",
        fortaleza:"Saber ",
        nombre_comp: function () 
        {
           return this.nombre+""+this.apellidoPaterno+""+this.apellidoMaterno;
        }
    },
    {
        nombre:"Julio",
        apellidoP:"Coronado",
        dia:5,
        mes:"Diciembre",
        año:1984,
        regalo:"Cama Gopro",
        imagen:"",
        fortaleza:"",
        nombre_comp: function () 
        {
           return this.nombre+""+this.apellidoPaterno+""+this.apellidoMaterno;
        }

    },
    {
        nombre:"Emanuel",
        apellidoP:"Casanova",
        dia:29,
        mes:"Octubre",
        año:1993,
        regalo:"Unas rodillas nuevas",
        imagen:"",
        fortaleza:"Saber ingles",
        nombre_comp: function () 
        {
           return this.nombre+""+this.apellidoPaterno+""+this.apellidoMaterno;
        }
    },  
]

 window.onload=function (ev)
 {
     var main=document.getElementById("maestros");

     for(i=0; i<maestros.length; i++)
        {
            '<div class="tarjeta">'+
            '<section class="profile-picture">'+
             '   <img src="" />'+
             ' </section>'
            '<section class="profile-info">'
                <header>
                    <h4 class="centrado">Nombre</h4>
                </header>
                <main>
                    <h5 class="derecha"></h5>
                </main>
                <footer >
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae veniam sequi dolore repellat rem error sunt nemo eveniet sit ipsum temporibus ab quae voluptate illo, delectus magnam laboriosam aspernatur consequatur.</p>
                </footer>
            </section>
            <div class="Clear"></div>
        </div>
        }
 }