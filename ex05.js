const express = require('express')
const server = express()
const router = require('./ex05_routes')

const porta = 8080

server.use('/api', router)

server.listen(porta, () => console.log(`Executando na porta ${porta}...`))