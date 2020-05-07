const express = require('express');
const app = express.Router();
const admin = require('../../firestone-admin/admin');
const routeNames = require('../route-names').RouteNames;
let db = admin.firestore();

//Get all the clients from the db
app.get('/', function (req, res, next) {
    let users = [];
    let productObject = {};
    const adminId = req.query.adminId;

    // console.log(adminId);

    let dbRef = db
        .collection(routeNames.PRODUCTS)
        .where('adminId', '==', adminId);

    dbRef
        .get()
        .then((doc) => {
            doc.forEach((product) => {
                productObject = product.data();
                productObject.productId = product.id;
                users.push(productObject);
            });
            res.send(users);
        })
        .catch((err) => {
            console.log('Error getting services: ', err);
        });
});

module.exports = app;
