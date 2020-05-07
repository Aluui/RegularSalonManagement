const express = require('express');
const app = express.Router();
const admin = require('../../firestone-admin/admin');
const routeNames = require('../route-names').RouteNames;

let db = admin.firestore();

app.post('/', function (req, res, next) {
    let product = req.body.product;
    console.log('update', req.body, product);

    let docRef = db
        .collection(routeNames.PRODUCTS)
        .doc(product.productId)
        .update(product)
        .then((docRef) => {
            res.send(true);
            console.log('Document updated with ID: ', docRef.id);
        })
        .catch((error) => console.log('Error adding document: ', error));
});

module.exports = app;
