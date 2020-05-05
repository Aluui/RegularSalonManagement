const express = require('express');
const app = express.Router();
const admin = require('../../firestone-admin/admin');
const routeNames = require('../route-names').RouteNames;

let db = admin.firestore();

app.post('/', function (req, res, next) {
    let client = req.body.client;
    let documentId = req.body.id;
    // let adminId = req.body.adminId;
    // console.log(client, adminId);

    let docRef = db
        .collection(routeNames.CLIENTS)
        .doc(documentId)
        .set(client)
        .then(() => {
            res.send(true);
            console.log('Document with ID ' + documentId + ' updated!');
        })
        .catch((error) => console.log('Error adding document: ', error));
});

module.exports = app;
