//create an express instance that takes in a config object
//and then starts the server
//
// Path: server.js
// Compare this snippet from index.js:
// const Server = require('./server');
// const Config = require('./config');
//
// const server = new Server(Config);
// server.start();

const express = require('express');
// const cors = require('cors');
// const logger = require('morgan');
// const mongoose = require('mongoose');

// const routes = require('./routes');

class Server {
  app = null;
  config = null;

  constructor(config) {
    this.app = express();
    this.config = config;
  }

  start() {
    this.setupExpress();
    // this.setupRoutes();
    // this.connectMongo();
    this.startListening();
  }
  
  setupExpress() {
    // this.app.use(logger('dev'));
    // this.app.use(cors());
    
    this.app.use(express.json()) 
    this.app.use(express.urlencoded({extended: false}));
  }

  setupRoutes() {
    this.app.use('/api', routes);
  }

  connectMongo() {
    mongoose.connect(this.config.mongoUrl, { useNewUrlParser: true });
  }

  startListening() {
    this.app.listen(this.config.port, () => {
      console.log(`Running: ${this.config.env}\nPORT: ${this.config.port}`);
    });
  }
}

module.exports = Server;






