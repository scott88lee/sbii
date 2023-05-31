const express = require('express');
const router = express.Router();

router.get('/auth', async (req, res) => {
  const axios = require('axios');
  const url = 'https://api.stripe.com/v1/customers'
  const bearerToken = `Bearer ${process.env.STRIPE_SECRET_KEY}`

  let { data } = await axios.get(url, {
    headers: {
      Authorization: bearerToken
    }
  })
  console.log(data);
  res.send(data);
});

module.exports = router;