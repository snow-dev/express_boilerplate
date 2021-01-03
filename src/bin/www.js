#!/usr/bin/env node

/**
 * Module dependencies.
 */

import app from '../app';
import debugLib from 'debug';
import http from 'http';
import * as https from 'https';
const debug = debugLib('REMS:localhost');

/**
 * Get port from environment and store in Express.
 */

let port = normalizePort(process.env.PORT || '8000');
app.set('port', port);

/**
 * Create HTTP server.
 */

let server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on(`Server listening on port:${port}` , onListening);

/**
 * Listen app using SSL cert
 */

// if (process.env.NODE_ENV === 'dev' && fs.existsSync(path.join(process.env.ROOT_PATH, 'ssl'))) {
//   const sslPort = normalizePort(process.env.APP_SSL_PORT || '9000');
//   const key = fs.readFileSync(process.env.APP_SSL_KEY);
//   const cert = fs.readFileSync(process.env.APP_SSL_CERT);
//   server.https = https.createServer({ key, cert, passphrase: process.env.APP_SSL_PASSPHRASE }, app);
//   server.https.listen(sslPort);
//   server.https.on('error', onError);
//   server.https.on('listening', onListening);
// }

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
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

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
  const protocol = this.cert ? 'https' : 'http'
  console.log(`Listening on ${protocol}://localhost${bind}`) // eslint-disable-line
}
