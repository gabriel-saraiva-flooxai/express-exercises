const express = require('express')
const server = express()

const porta = 8080

server.use('/api', function(req, res, next) {
    console.log('Inicio...')
    next()
    console.log('Fim...');
})

// Deixando direto a function ele é usado em todas as rotas
// server.use(function(req, res, next) {
//     console.log('Resposta...')
//     res.send('<h1>API!</h1>')
// })

server.use('/api', function(req, res, next) {
    console.log('Resposta...')
    res.send('<h1>API!</h1>')
})

server.listen(porta, () => console.log(`Executando na porta ${porta}...`))