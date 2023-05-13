// Desc: Users route
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello from USERS');
});

module.exports = router;
