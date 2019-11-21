const express = require('express');
const app = express.Router();
const admin = require('../../firestone-admin/admin');

let db = admin.firestore();

let dbRef = db.collection('users');

//Get all the clients from the db
app.get('/', function(req, res, next) {
  let users = [];
  let clientUser = {};
  dbRef
    .get()
    .then(doc => {
      doc.forEach(client => {
        clientUser = client.data();
        clientUser.clientId = client.id;
        users.push(clientUser);
      });
      res.send(users);
    })
    .catch(err => {
      console.log('Error getting clients: ', err);
    });
});

module.exports = app;
