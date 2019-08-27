
var student = [
    Itzel = 
    {
        nombre:'Itzel',
        edad: 22,
        carrera: 'Mecatronica',
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
        show: function()
        {
            console.log("Nombre: " + this.nombre);
            console.log("Carrera: " + this.carrera);
        }
    },
    ];

    for(var i = 0; i < student.length; i++)
    {
        console.log("Student" + i);
        student[i].show();
        console.log("");
    }
    

