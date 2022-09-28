import express, { response } from 'express'
import cors from 'cors'

// ---------------------- Server and routes ----------------------
const server = express()

server.get('/status', (request, response) => {getStatus(request, response)})

// Habilitar cors para a requisição do formulário. 
const enableCors = cors({origin: 'http://localhost:3000'})

// Antes de realizar uma requisição POST a aplicação executa uma requisição OPTIONS.
// Desta forma é necessário adiciona-la na restrição do CORS

server
  .options('/authenticate', enableCors)
  .post(
    '/authenticate',
    enableCors,
    express.json(),
    (request, response) => {getAuthentication(request, response)}
  )

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
}

// Realiza a autenticação de um usuário.
function getAuthentication(request, response) {
  console.log(
    'E-mail', request.body.email,
    'Senha', request.body.password
  )

  response.send({
    OK: true
  })
}

function invalidRoutes(request, response) {
  response.writeHead(404)
  response.write('This page does not exist!')
  response.end()
}