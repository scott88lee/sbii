//routes file
const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));

router.get('/', (req, res) => {
  req.app.db.collection('test').insertOne({name: 'asdasdasdad '});
  res.send('Hello from routes');
});

//404 error
router.all('*', (req, res, ) => {
  const err = `${req.ip} tried to access ${req.originalUrl}`;
  res.send(err);
});

module.exports = router;
