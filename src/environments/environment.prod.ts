import * as io from 'socket.io-client';
export const environment = {
  production: true,
  API: 'http://localhost:3000/',
  socket: io.connect('http://localhost:3500/')
};
