
const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.post("/verificacion", (req, res) => {

    const { correo, password } = req.body;

    const datos = JSON.parse(fs.readFileSync("./db_usuarios.json","utf8"));

    const usuario = datos.usuarios.find(
        usuario =>
            usuario.correo === correo &&
            usuario.password === password
    );

    if (!usuario) {

        return res.status(401).json({mensaje: "Credenciales incorrectas"});
    }

    res.json({mensaje: "Login exitoso",usuario});
});

app.listen(3000, () => {
    console.log(
        "Servidor en http://localhost:3000"
    );
});