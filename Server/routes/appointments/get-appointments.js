const express = require('express');
const app = express.Router();
const admin = require('../../firestone-admin/admin');

let db = admin.firestore();

//Get all the clients from the db
app.get('/', function (req, res, next) {
    let appointments = [];
    let appt = {};
    const adminId = req.query.adminId;

    // console.log(adminId);

    let dbRef = db.collection('Appointments').where('adminId', '==', adminId);

    dbRef
        .get()
        .then((doc) => {
            doc.forEach((appointment) => {
                appt = appointment.data();
                appt.apptId = appointment.id;
                appointments.push(appt);
            });
            res.send(appointments);
        })
        .catch((err) => {
            console.log('Error getting any appointments: ', err);
        });
});

module.exports = app;
