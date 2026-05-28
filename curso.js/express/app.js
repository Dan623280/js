const express = require('express')

const app = express()

let datos = require('./datos/datos.json')



app.get('/:dat', (req, res) => {
    let tabla = req.params.dat
    let resultado = datos[tabla]

    if (!resultado) {
        res.status(404).end("Datos no encontrados")
    } else {
        res.end(JSON.stringify(resultado))
    }
})




const PUERTO = 3001

app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en el puerto ${PUERTO}...`)
})