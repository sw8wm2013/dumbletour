const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fetch = require('isomorphic-fetch');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./oauth-config/passport-setup');
const mongoose = require('mongoose');
const authKeys = require('./oauth-config/auth-keys');
const MongoClient = require("mongodb").MongoClient;
const cookieSession = require('cookie-session');
const passport = require('passport');
const app = express();
const PORT = process.env.PORT || 3000;

// view engine 
app.set('view engine', 'ejs');

// connect to mongoDB
mongoose.connect(authKeys.mongodb.dbURI, { useNewUrlParser: true }, () => {
  console.log('You are connected to dumbleCluster...');
});

// NPM MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//initialize passport with cookie sessions
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [authKeys.session.cookieKey],
}));
app.use(passport.initialize());
app.use(passport.session());


// Set up routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

// Index Page Route Handler
app.get('/', (req, res) => {
  res.render('./../client/auth-test.ejs');
});






// Listen for requests on PORT
app.listen( () => {
  // MongoClient.connect(
  //   'mongodb+srv://bleep241:g@teofMlab65@dumblecluster-l56v3.mongodb.net/test?retryWrites=true&w=majority',
  //   { useNewUrlParser: true }, (err, client) => {
  //     console.log('You are connected to your Apex DB'); 
  //     if (err) {
  //       throw err;
  //     }
  //     db = client.db('dumbleDB');
  //     collection = db.collection('users');
      
  //     console.log('CONNECTED TO dumbleDB!');
  //     // const guns = collection.find({});
  //     // console.log('guns from mongo atlas', guns);
  // })
  console.log(`Your server is listening on port: ${PORT}...          GO TEAM DUMBLETOUR!`);
});