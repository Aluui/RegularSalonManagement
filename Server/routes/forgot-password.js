const express = require('express');
const app = express.Router();
const firebase = require('firebase');
//const auth = firebase.auth();

app.get('/', function(req, res, next) {
    let email = req.query.email;
    // console.log(email);
    firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(arg => {
            res.send(true);
        })
        .catch(function(error) {
            let errorMessage = error.message;
            res.send(errorMessage);
        });
});

module.exports = app;
