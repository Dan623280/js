

function getCursos() {

    let datos = require('./datos/datos.json')

    let cursos = [
        datos.estudiantes,
        datos.profesores,
        datos.materias
    ]

    return cursos;
}

module.exports = { getCursos };

