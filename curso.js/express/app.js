const express = require('express')

const app = express()

let datos = require('./datos/datos.json')

app.get('/', (req, res) => {
    res.end("Bienvenido a la API de los diferentes cursos del programa")
})

app.get('/:dat', (req, res) => {
    let tabla = req.params.dat
    let resultado = datos[tabla]

    if (!resultado) {
        res.status(404).end("Datos no encontrados")
    } else {
        res.end(JSON.stringify(resultado))
    }
})



app.get('/cursos/:salon', (req, res) => {
    let salon= req.params.salon
    let consulta_salon = datos.estudiantes.filter(est => est.curso === salon)

    if (consulta_salon.length === 0) {
        res.status(404).end("Salon no encontrado")
    } else {
        res.end(JSON.stringify(consulta_salon))
    }

})

const PUERTO = 3000

app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en el puerto ${PUERTO}...`)
})