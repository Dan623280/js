
const fs = require('fs')

console.log("leer archivo");
fs.readFileSync('data.txt', 'utf8', (err, data) => { 
    if (err) {
        console.error(err);
        return;
    }
    console.log("Estos son los datos del archivo: ");
    console.log(data);

})

console.log("");
console.log("añadir contenido");
fs.appendFileSync("data.txt", "\nNuevo contenido", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Contenido agregado al archivo.");
});

console.log("");
console.log("borrar archivo");
fs.unlinkSync("data.txt", (err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log("Archivo eliminado");
});

console.log("");
console.log("crear carpeta");
fs.mkdirSync("fscarpeta", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Carpeta creada");
});
console.log("");



fs.writeFileSync("archivo.txt", "Hola Node", (err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log("Archivo creado");
});