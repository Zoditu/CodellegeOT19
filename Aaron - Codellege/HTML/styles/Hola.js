var http = require("http");


console.log ("Iniciando server en el puerto 666");
const server = http.createServer( (request, response) => {

    var alumnos = [
        {
            a: '2323242',
            b: 2344,
            c: true,
            d: {
                x: "daskhda"
            }
        }
    ]
    console.log ("Se conectó alguien...");
    response.end(JSON.stringify(alumnos));

} ).listen (666);
console.log("¿?");
