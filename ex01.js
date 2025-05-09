const express = require('express')
const server = express()

const porta = 8080

server.get('/', function(req, res) {
    res.send('<h1>Index!</h1>')
})

server.all('/teste', function(req, res) {
    res.send('<h1>Teste!</h1>')
})

server.get(/api/, function(req, res) {
    res.send('<h1>API!</h1>')
})

server.listen(porta, () => console.log(`Executando na porta ${porta}...`))