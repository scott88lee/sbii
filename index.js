const Server = require('./server');
const Config = require('./server/config');

const server = new Server(Config);
server.start();