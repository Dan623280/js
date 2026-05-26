const http =  require('http')


const servidor = http.createServer( (req, res) => {
    console.log('===> res (respuesta)');

    res.setHeader('Content-Type', 'application/json');

    console.log(res.getHeaders());
    res.end('Hello, World!')

} )

const puerto = 3000

servidor.listen(puerto, () => {

    console.log(`Servidor corriendo en http://localhost:${puerto}`)

})