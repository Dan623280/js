
const http = require('http')
const cursos = require('./base_datos')

const server = http.createServer((req, res) => {
    
    if (req.method === 'GET') {
        peticionmetodoget(req,res)
    } else{
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Método no permitido' }));
    }
})

function peticionmetodoget(req, res) {

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end('Bienvenido a la API de los diferentes cursos');
    }else if (req.url === '/cursos') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(cursos.cursos));
    } else if (req.url === '/programas') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(cursos.programa));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Ruta no encontrada' }));
    }
}

const puerto = 3001

server.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});