const express = require('express');
const router = express.Router();

router.post('/:entity', async (req, res) => {
  const { entity } = req.params;
  const { body } = req;
  const { db } = req.app;
  const results = await db.collection(entity).insertOne(body);
  res.send(results);
});

module.exports = router;