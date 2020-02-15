const express = require('express');
const app = express.Router();
const dotenv = require('dotenv').config();
//const admin = require('./firestone-admin/admin');
const firebase = require('firebase');


app.get('/', function(req, res, next) {
  firebase
    .auth()
    .signOut()
    .then(function() {
      // Sign-out successful.
      res.send(true);
    })
    .catch(function(error) {
      // An error happened.
      res.send(false);
    });
});

module.exports = app;
