import http from 'http';

const PORT = 3000;

const routes = {
    "/": "Curso em express.js",
    "/livros": "entrei na rota livros",
    "/autores" : "Entrei na rota Autores",
}

const server = http.createServer((req, res)=> {
    res.writeHead(200, {"content-type" : "text/plain"});
    res.end(routes[req.url]);
});

server.listen(PORT,() =>{
    console.log("servidor esta rodando")
})

