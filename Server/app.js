const express = require('express');
//const admin = require('./firestone-admin/admin');
const loginRouter = require('./routes/login');
const signoutRouter = require('./routes/signout');
const signupRouter = require('./routes/signup');
const addclientRouter = require('./routes/clients/add-client');
const getclientsRouter = require('./routes/clients/get-client');
const getsingleclientRouter = require('./routes/clients/get-single-client');

const firebase = require('firebase');

const app = express();

app.set('view engine', 'static');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-RequOMAIN.TLDested-With, Content-Type, Accept'
  );
  next();
});

app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/signout', signoutRouter);
app.use('/clients/add-client', addclientRouter);
app.use('/clients/get-client', getclientsRouter);
app.use('/clients/get-single-client', getsingleclientRouter);
// app.use(express.static('routes'));

// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

app.listen('3000', () => {
  console.log('Server is listening on port 3000');
});
