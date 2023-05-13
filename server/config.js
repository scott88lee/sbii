dotenv = require('dotenv');
dotenv.config();

const { MongoClient } = require('mongodb');
const uri = process.env.DB_URI || false;
if (!uri) {
    console.log('No DB_URI found in .env');
}

let mongodb, client;

function connect(callback) {
    MongoClient.connect(uri, (err, db) => {
        if (err) { console.log(err) }
        else {
            console.log('MongoDB connected.')
            client = db;
            mongodb = db.db('test');
            callback();
        }
    });
}

function query() {
    return mongodb;
}

function mongoClient() {
    return client;
}

module.exports = {
  connect,
  query,
  mongoClient,
  env: process.env.NODE_ENV || 'DEV',
  port: process.env.PORT || 3000,
  mongoUrl: process.env.MONGODB || 'mongodb://localhost:27017/express-mongo'
};