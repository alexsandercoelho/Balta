
const app = require('../src/app');
const debug = require('debug')('nodestr:server');
const http = require('http');

const port = normalizePort(process.env.PORT ||'3399'); //|| = ou 
app.set('port', port);

const server = http.createServer(app);

//chamando os eventos
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

console.log ('Server is Running Port: ' +port);

//Funcao para Normalizar a Porta
function normalizePort(val) {      //recebe um valor e converte para um inteiro
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }

  return false;
}

//Funcao para Gerenciar Erros
function onError(error) {
  if (error, syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ?
    'Pipe ' + port :
    'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevate privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

//Funcao para Debug
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}