//routes file
const express = require('express');
const router = express.Router();

const passport = require('passport');
const cookieSession = require('cookie-session');

router.use(cookieSession({
  name: 'google-auth-session',
  keys: ['key1', 'key2']
}))

router.use(passport.initialize());
router.use(passport.session());

router.get('/', (req, res) => {
  // req.app.db.collection('test').insertOne({name: 'asdasdasdad '});
  res.render('index', { thing: 'Express' })
});

router.get("/failed", (req, res) => {
  res.send("Failed")
})

router.get("/success", (req, res) => {
  res.send(`Welcome ${req.user.email}`)
})

router.get('/google',
  passport.authenticate('google', {
    scope:
      ['email', 'profile']
  }
  ));

router.get('/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/failed',
  }),
  function (req, res) {
    res.redirect('/success')

  }
);

router.use('/users', require('./users'));
router.use('/stripe', require('./stripe'));
router.use('/webhooks', require('./webhooks'));

//404 error
router.all('*', (req, res,) => {
  // console.log(req.socket.remoteAddress);
  const err = `${req.ip} tried to access ${req.originalUrl}`;
  res.send(err);
});

module.exports = router;
