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

//Get an individual client based on Id
app.get('/', function(req, res, next) {
  let clientId = req.query;
  console.log(clientId);
  dbRef
    .doc(clientId)
    .get()
    .then(client => {
      if (!client.exists) {
        console.log('No such document!');
      } else {
        console.log('Client data:', client.data());
      }
    })
    .catch(err => {
      console.log('Error getting document', err);
    });
});

module.exports = app;
