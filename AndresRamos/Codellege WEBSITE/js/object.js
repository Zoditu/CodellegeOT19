
var student = [
    Celestino = 
    {
        nombre:'Celestino',
        edad: 22,
        carrera: 'Codellege',
        genero: 'M',
        show: function()
        {
            console.log("Nombre: " + this.nombre);
            console.log("Carrera: " + this.carrera);
        }
    },
    Itzel = 
    {
        nombre:'Itzel',
        edad: 22,
        carrera: 'Mecatronica',
        genero: 'F',
        show: function()
        {
            console.log("Nombre: " + this.nombre);
            console.log("Carrera: " + this.carrera);
        }
    },
    Liliana = 
    {
        nombre:'Liliana',
        edad: 22,
        carrera: 'Software',
        genero: 'F',
        show: function()
        {
            console.log("Nombre: " + this.nombre);
            console.log("Carrera: " + this.carrera);
        } 

    },
    Aldo = 
    {
        nombre:'Aldo',
        edad: 22,
        carrera: 'Codellege',
        genero: 'M',
        show: function()
        {
            console.log("Nombre: " + this.nombre);
            console.log("Carrera: " + this.carrera);
        } 
    },
    Aaron = 
    {
        nombre:'Aaron',
        edad: 22,
        carrera: 'Administracion',
        genero: 'M',
        show: function()
        {
            console.log("Nombre: " + this.nombre);
            console.log("Carrera: " + this.carrera);
        }
    },
    ];

    for(var i = student.length - 1; i >= 0; i--)
    {
        if(student[i].genero == 'M'){
            console.log("Male students" + i);
            student[i].show();
            console.log("");
        }
        else
        {
            console.log("Female students" + i);
            student[i].show();
            console.log("");
        }
    }
    

