const express = require('express');
//const admin = require('./firestone-admin/admin');
const loginRouter = require('./routes/login');
const signoutRouter = require('./routes/signout');
const signupRouter = require('./routes/signup');

const addclientRouter = require('./routes/clients/add-client');
const editClientRouter = require('./routes/clients/edit-client');
const getclientsRouter = require('./routes/clients/get-client');
const getsingleclientRouter = require('./routes/clients/get-single-client');
const deleteclientRouter = require('./routes/clients/delete-client');

const addserviceRouter = require('./routes/services/add-service');
const updateserviceRouter = require('./routes/services/update-service');
const deleteserviceRouter = require('./routes/services/delete-service');
const getservicesRouter = require('./routes/services/get-services');
const getsingleserviceRouter = require('./routes/services/get-single-service');

const forgotpasswordRouter = require('./routes/forgot-password');
const addAppointmentRouter = require('./routes/appointments/add-appointment');
const getAppointmentsRouter = require('./routes/appointments/get-appointments');

const firebase = require('firebase');

const app = express();

app.set('view engine', 'static');

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/signout', signoutRouter);
app.use('/clients/add-client', addclientRouter);
app.use('/clients/edit-client', editClientRouter);
app.use('/clients/get-client', getclientsRouter);
app.use('/clients/get-single-client', getsingleclientRouter);
app.use('/clients/delete-client', deleteclientRouter);

app.use('/services/add-service', addserviceRouter);
app.use('/services/update-service', updateserviceRouter);
app.use('/services/delete-service', deleteserviceRouter);
app.use('/services/get-service', getservicesRouter);
app.use('/services/get-single-service', getsingleserviceRouter);

app.use('/forgot-password', forgotpasswordRouter);
app.use('/add-appointment', addAppointmentRouter);
app.use('/get-appointments', getAppointmentsRouter);
// app.use(express.static('routes'));

// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

app.listen('3000', () => {
    console.log('Server is listening on port 3000');
});
