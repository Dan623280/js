
const express = require('express')

const app = express()


let datos = require('../datos/datos.json')

const routerprogramacion = express.Router()

app.use('/cursos', routerprogramacion)




routerprogramacion.get('/', (req, res) => {
    res.end(JSON.stringify(cursos))
    
})

routerprogramacion.get('/:salon', (req, res) => {
    let salon= req.params.salon
    let consulta_salon = datos.estudiantes.filter(est => est.curso === salon)

    if (consulta_salon.length === 0) {
        res.status(404).end("Salon no encontrado")
    } else {
        res.end(JSON.stringify(consulta_salon))
    }

})