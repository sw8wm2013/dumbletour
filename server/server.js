const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fetch = require('isomorphic-fetch');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./oauth-config/passport-setup');
const authKeys = require('./oauth-config/auth-keys');
const { MongoClient } = require('mongodb');
const cookieSession = require('cookie-session');
const passport = require('passport');

const app = express();

// use a json body parser
app.use(bodyParser.json());

// connect to mongoDB
mongoose.connect(authKeys.mongodb.dbURI, { useNewUrlParser: true }, () => {
  console.log('You are connected to dumbleCluster...');
});

// only serve webpack bundle file when running in production
if (process.env.NODE_ENV === 'production') {
  // serve index.html on the route '/'
  app.use('/build/', express.static(path.join(__dirname, '../build')));
}

// initialize passport with cookie sessions
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [authKeys.session.cookieKey],
}));
app.use(passport.initialize());
app.use(passport.session());
// authorization
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
// TEMPORARY OAUTH TEST
// view engine
// app.set('view engine', 'ejs');
// app.get('/', (req, res) => {
//   res.render('./../client/auth-test.ejs');
// });


// TEMPORARY SEARCH ROUTE
app.post('/api/search', (req, res) => {
  console.log(req.body);
  res.status(200);
  res.setHeader('Content-type', 'application/json');
  res.json([{ name: 'museum of redux' }, { name: 'jake tells jokes' }, { name: 'lion king walking tour' }]);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});


// Listen for requests on PORT 3000
app.listen(3000);
module.exports = app;
