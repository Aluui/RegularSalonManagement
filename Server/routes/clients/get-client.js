const express = require('express');
const app = express.Router();
const admin = require('../../firestone-admin/admin');
const routeNames = require('../route-names').RouteNames;
let db = admin.firestore();

//Get all the clients from the db
app.get('/', function (req, res, next) {
    let users = [];
    let clientUser = {};
    const adminId = req.query.adminId;

    let dbRef = db
        .collection(routeNames.CLIENTS)
        .where('adminId', '==', adminId);

    dbRef
        .get()
        .then((doc) => {
            doc.forEach((client) => {
                clientUser = client.data();
                clientUser.clientId = client.id;
                users.push(clientUser);
            });
            res.send(users);
        })
        .catch((err) => {
            console.log('Error getting clients: ', err);
        });
});

module.exports = app;
