const routeNames = require('../route-names').RouteNames;
const express = require('express');
const app = express.Router();
const admin = require('../../firestone-admin/admin');

let db = admin.firestore();

//Get an individual client based on Id
app.get('/:id?', function (req, res, next) {
    // console.log('Route hit', req);

    let serviceId = req.query.id;
    const adminId = req.query.adminId;

    let dbRef = db.collection(routeNames.SERVICES);

    dbRef
        .doc(serviceId)
        .get()
        .then((service) => {
            if (!service.exists) {
                //console.log('No such document!');
            } else {
                //console.log('service data:', service.data());
                res.send(service.data());
            }
        })
        .catch((err) => {
            //console.log('Error getting document', err);
        });
});

module.exports = app;
