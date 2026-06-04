const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.get("/api/productos", (req, res) => {
    const datos = JSON.parse(
        fs.readFileSync("./db.json", "utf8")
    );

    res.json(datos.productos);
});



// Captura cualquier otra ruta y devuelve index.html
app.use((req, res) => {
    res.sendFile(
        path.join(__dirname, "public", "index.html")
    );
});

app.listen(3000, () => {
    console.log("Servidor en http://localhost:3000");
});