const express = require('express');
const app = express.Router();
const admin = require('../../firestone-admin/admin');
const routeNames = require('../route-names').RouteNames;
let db = admin.firestore();

app.post('/', function (req, res, next) {
    let client = req.body.client;
    // let adminId = req.body.adminId;
    // console.log(client, adminId);

    let docRef = db
        .collection(routeNames.CLIENTS)
        .add(client)
        .then((docRef) => {
            res.send(true);
            console.log('Document written with ID: ', docRef.id);
        })
        .catch((error) => console.log('Error adding document: ', error));
});

module.exports = app;
