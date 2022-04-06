const http = require('http');
const port = 3000;

const handleServer = (req, res) => {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('Hola mundo');
    res.end();
}

const server = http.createServer(handleServer);
server.listen(port, () => {
    console.log('Servidor abierto en el puerto ' + port)
})