const express = require('express');
const app = express.Router();
const admin = require('../../firestone-admin/admin');
const routeNames = require('../route-names').RouteNames;

let db = admin.firestore();

app.post('/', function (req, res, next) {
    let service = req.body.service;
    console.log('update', req.body, service);

    let docRef = db
        .collection(routeNames.SERVICES)
        .doc(service.serviceId)
        .update(service)
        .then((docRef) => {
            res.send(true);
            console.log('Document updated with ID: ', docRef.id);
        })
        .catch((error) => console.log('Error adding document: ', error));
});

module.exports = app;
