const express = require('express')
const server = express()

const porta = 8080

server.get('/', function(req, res, next) {
    console.log('Inicio...')
    next()
    console.log('Fim...');
})

server.get('/', function(req, res, next) {
    console.log('Resposta...')
    res.send('<h1>Olá Express!</h1>')
})

server.listen(porta, () => console.log(`Executando na porta ${porta}...`))