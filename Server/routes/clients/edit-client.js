const express = require('express');
const app = express.Router();
const admin = require('../../firestone-admin/admin');

let db = admin.firestore();

app.post('/', function (req, res, next) {
    let client = req.body.client;
    let documentId = req.body.id;
    // let adminId = req.body.adminId;
    // console.log(client, adminId);

    let docRef = db
        .collection('Clients')
        .doc(documentId)
        .set(client)
        .then((docRef) => {
            res.send(true);
            console.log('Document written with ID: ', docRef.id);
        })
        .catch((error) => console.log('Error adding document: ', error));
});

module.exports = app;
