const express = require('express');
const app = express.Router();
const admin = require('../../firestone-admin/admin');
const routeNames = require('../route-names').RouteNames;
let db = admin.firestore();

//Get an individual client based on Id
app.get('/:id?', function (req, res, next) {
    // console.log('Route hit', req);

    let clientId = req.query.id;
    const adminId = req.query.adminId;

    let dbRef = db.collection(routeNames.CLIENTS);

    // console.log(clientId);
    dbRef
        .doc(clientId)
        .get()
        .then((client) => {
            if (!client.exists) {
                //console.log('No such document!');
            } else {
                //console.log('Client data:', client.data());
                res.send(client.data());
            }
        })
        .catch((err) => {
            //console.log('Error getting document', err);
        });
});

module.exports = app;
