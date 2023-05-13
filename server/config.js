dotenv = require('dotenv');
dotenv.config();

const uri = process.env.DB_URI || false;
if (!uri) {
    console.log('No DB_URI found in .env');
}

module.exports = {
  env: process.env.NODE_ENV || 'DEV',
  port: process.env.PORT || 3000,
  DB_URI: process.env.DB_URI || 'mongodb://localhost:27017/express-mongo'
};