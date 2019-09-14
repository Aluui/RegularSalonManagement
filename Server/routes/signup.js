const express = require('express');
const app = express.Router();
const admin = require('../firestone-admin/admin');

app.get('/', function(req, res, next) {
  let user = req.query;
  console.log(user);

  admin
    .auth()
    .createUser({
      email: user.email,
      emailVerified: false,
      phoneNumber: '+' + user.phoneNumber,
      password: user.password,
      displayName: user.name,
      disabled: false
    })
    .then(function(userRecord) {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log('Successfully created new user:', userRecord.uid);
    })
    .catch(function(error) {
      console.log('Error creating new user:', error);
    });
});

module.exports = app;
