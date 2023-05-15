dotenv = require('dotenv');
dotenv.config();

const dbName = process.env.DB_NAME || false;
const uri = process.env.DB_URI || false;
if (!uri) {
    console.log('No DB_URI found in .env');
}

module.exports = {
  env: process.env.NODE_ENV || 'DEV',
  port: process.env.PORT || 3000,
  db: {
    uri: uri,
    name: dbName
  }
};