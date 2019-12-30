const os = require('os');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const device = require('express-device');
const mongoose = require('mongoose');
const uri = 'mongodb+srv://Dhairya-Shalu:light12345@first-demo-ocw10.mongodb.net/test?retryWrites=true&w=majority';

let Model = require('./model.js');
let loginValid = require('./loginvalid');
let eventRegister = require('./eventRegister');
let signupvalid = require('./Signupvalidation').signUpValid;

const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use(cors());

app.use(helmet());

app.use(device.capture());
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    // dbName: 'Blitzschlag20'
    dbName: 'test'
});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function() {
    console.log('Connected to the database');
});

app.post('/login', (req, res) => {
    let userLoginData = req.body;
    let flag = loginValid.userValid(userLoginData)
    if (flag) {
        let fetchedUserDetails = loginValid.showUser(userLoginData);
        if (fetchedUserDetails === undefined) {
            console.log('Incorrect Blitz Password');
        }
    } else {
        console.log('User not registered');
    }
});

app.post('/signup', (req, res) => {
    let user = req.body;
    console.log(req.body);
    signupvalid(user).then(function(result) {
        if (result === undefined) {
            console.log('You are already Registered');
        } else {
            console.log('You are Registered');
        }
    });
});

app.post('/events', (req, res) => {
    let eventReg = req.body;
    eventRegister.updateUser(eventReg);
});


app.use(express.static('dist'));
console.log(process.env.PORT);
app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
