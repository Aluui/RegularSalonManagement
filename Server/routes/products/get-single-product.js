const routeNames = require('../route-names').RouteNames;
const express = require('express');
const app = express.Router();
const admin = require('../../firestone-admin/admin');

let db = admin.firestore();

//Get an individual client based on Id
app.get('/:id?', function (req, res, next) {
    // console.log('Route hit', req);

    let productId = req.query.id;
    const adminId = req.query.adminId;

    let dbRef = db.collection(routeNames.PRODUCTS);

    dbRef
        .doc(productId)
        .get()
        .then((product) => {
            if (!product.exists) {
                //console.log('No such document!');
            } else {
                let productObject = product.data();
                productObject.productId = product.id;
                //console.log('service data:', service.data());
                res.send(productObject);
            }
        })
        .catch((err) => {
            //console.log('Error getting document', err);
        });
});

module.exports = app;
