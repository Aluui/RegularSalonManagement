const express = require('express');
const app = express.Router();
const admin = require('../../firestone-admin/admin');

let db = admin.firestore();

app.get('/', function(req, res, next) {
  let client = req.query;
  console.log(client);

  let docRef = db
    .collection('users')
    .add({
      first: client.firstName,
      last: client.lastName,
      fullName: client.firstName + ' ' + client.lastName,
      DOB: client.DOB,
      phoneNumber: client.phoneNumber
      //timestamp: FieldValue.serverTimestamp()
    })
    .then(docRef => {
      res.send(true);
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(error => console.log('Error adding document: ', error));
});

module.exports = app;
