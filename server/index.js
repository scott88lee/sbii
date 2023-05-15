const express = require('express');
class Server {
  app = null;
  config = null;

  constructor(config) {
    this.app = express();
    this.config = config;
  }

  start() {
    this.setupExpress();
    this.setupRoutes();
    this.connectMongo();
    this.startListening();
  }
  
  setupExpress() {
    const logger = require('morgan');
    this.app.use(logger('dev'));
    // const cors = require('cors');
    // this.app.use(cors());
    
    this.app.use(express.json()) 
    this.app.use(express.urlencoded({extended: false}));
  }

  setupRoutes() {
    const routes = require('../routes');
    this.app.use('/', routes);
  }

  async connectMongo() {
    const { MongoClient } = require('mongodb');
    const client = new MongoClient(this.config.db.uri, { useNewUrlParser: true });
    
    await client.connect();
    this.app.db = client.db(this.config.db.name);
    console.log('MongoDB connected.');
  }

  startListening() {
    this.app.listen(this.config.port, () => {
      console.log(`Running: ${this.config.env}\nPORT: ${this.config.port}`);
    });
  }
}

module.exports = Server;