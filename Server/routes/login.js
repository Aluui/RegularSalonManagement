const express = require('express');
const app = express.Router();
const dotenv = require('dotenv').config();
//const admin = require('./firestone-admin/admin');
const firebase = require('firebase');

app.get('/', function(req, res, next) {
  let email = req.query.email;
  let password = req.query.password;
  // console.log(email, password);
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          res.send(user);
          //console.log('User is: ', user);
        } else {
          res.send(null);
          console.log('User Probably Doesnt exist');
        }
      })
    )
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  //res.send(true);

  //   admin
  //     .auth()
  //     .getUserByEmail(email)
  //     .then(function(userRecord) {
  //       // See the UserRecord reference doc for the contents of userRecord.
  //       console.log('Successfully fetched user data:', userRecord.toJSON());
  //       res.send(true);
  //     })
  //     .catch(function(error) {
  //       console.log('Error fetching user data:', error);
  //     });
});

module.exports = app;
