/*import { createServer } from 'http'

// Decodificar os dados vindos por POST
import { parse } from 'querystring'*/

import express, { response } from 'express'

// ---------------------- Server and routes ----------------------
// ---------------------- Com Express ----------------------
const server = express()

server.get('/status', (request, response) => {getStatus(request, response)})
server.post('/authenticate',  (request, response) => {getAuthentication(request, response)})

// ---------------------- Node puro ----------------------
/*const server = createServer((request, response) => {
  const routes = {

    '/status': () => { getStatus(request, response) },

    '/authenticate': () => { getAuthentication(request, response) },
  }

  if(!routes[request.url]) {
    invalidRoutes(request, response)
    return
  }

  routes[request.url]()
})*/

// Configuração de interface (porta) para alterar configurações via 
// variável de ambiente. Caso exista use senão porta default 8080.
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8080

// Configuração do Hostname para alterar configurações via variável 
// de ambiente. Se não existir um HOSTNAME definido fai atribuir false
// aplicando então o endereço padrão 127.0.0.1.
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1'

// Executa o servidor.
server.listen(8080, '127.0.0.1', () => {
  console.log(`Server in listening at http://${HOSTNAME}${PORT}`)
})

// ---------------------- Functions routes ----------------------

// Retorna JSON
function getStatus(request, response) {
  response.send({
    status:'OK'
  })

  /*response.writeHead(200, {
    'Content-Type': 'application/json'
  })

  response.write(
    JSON.stringify({
      status: 'Status'
    })
  )
  response.end()*/
}

// Realiza a autenticação de um usuário.
function getAuthentication(request, response) {
  console.log(
    'E-mail', request.body.email,
    'Senha', request.body.password
  )

  response.send()

  /*let data = ''

  // Patterns de evento.
  // Vai ler o buffer aos poucos.
  request.on('data', (chunk) => {
    data += chunk
  })

  request.on('end',() => {
    let params = parse(data)

    // AQUI ENTRA A AUTENTICAÇÃO NO BANCO

    response.end()
  })*/
}

function invalidRoutes(request, response) {
  response.writeHead(404)
  response.write('This page does not exist!')
  response.end()
}