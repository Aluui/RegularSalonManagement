const express = require('express');
const app = express.Router();
const admin = require('../../firestone-admin/admin');
const routeNames = require('../route-names').RouteNames;

let db = admin.firestore();

app.post('/', function (req, res, next) {
    let product = req.body.product;
    let docRef = db
        .collection(routeNames.PRODUCTS)
        .doc(product.productId)
        .delete()
        .then((_) => {
            res.send(true);
            console.log('Document deleted');
        })
        .catch((error) => console.log('Error deleting document: ', error));
});

module.exports = app;
