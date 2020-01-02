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
let { idModel } = require('./idModel');
let loginValid = require('./loginvalid');
let eventRegister = require('./eventRegister');
let signupvalid = require('./Signupvalidation');
let mobAndPinValid = require('./mobileAndPinValid');

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
    dbName: 'Blitzschlag20'
});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function() {
    console.log('Connected to the database');
});

app.post('/login', (req, res) => {
    let userLoginData = req.body;
    loginValid.userValid(userLoginData).then(function(result) {
        if (result) {
            if (result === 1) {
                console.log('Incorrect Blitz Pin');
                res.send({
                    status: false,
                    message: 'Incorrect PIN!',
                });
            } else {
                console.log(result);
                res.send({
                    status: true,
                    data: result
                });
            }
        } else {
            console.log('User not registered');
            res.send({
                status: false,
                message:'User not Registered!',
            })
        }
    });
});

app.post('/signup', (req, res) => {
    let userInput = req.body;
    let user = new Model.userModel(userInput);
    signupvalid.signUpValid(userInput).then(function(valid) {
        if (valid === undefined) {
            res.send({
                status: false,
                message: "You are already Registered!"
            });
        } else {
            mobAndPinValid.phonenumber(userInput.mob).then(function(result) {
                if (result) {
                    mobAndPinValid.validatePIN(userInput.blitzPIN).then(function(result) {
                        if (result) {
                            console.log('true pin');
                            signupvalid.retrieveBlitzID().then(function(result2) {
                                if (result2) {
                                    user.blitzID = result2.blitzCount + 1;
                                    signupvalid.userSave(user).then((result3) => {
                                        if (result3) {
                                            result2.blitzCount += 1;
                                            signupvalid.updateBlitzID(result2).then((result4) => {
                                                if (result4) {
                                                    res.send({
                                                        status: true,
                                                        data: result3
                                                    });
                                                } else {
                                                    res.send({
                                                        status: false,
                                                        message: "Internal Error!"
                                                    });
                                                }
                                            });
                                        } else {
                                            res.send({
                                                status: false,
                                                message: "Internal Error!"
                                            });
                                        }
                                    });
                                } else {
                                    res.send({
                                        status: false,
                                        message: "Internal Error!"
                                    });
                                }
                            });
                        } else {
                            console.log('false pin');
                            res.send({
                                status: false,
                                message: "Invalid Pin!"
                            });
                        }
                    });
                } else {
                    console.log('false mobile num');
                    res.send({
                        status: false,
                        message: "Incorrect Mobile Number!"
                    });
                }
            });
        }
    });
});

app.post('/events', (req, res) => {
    let eventReg = req.body;
    eventRegister.retrieveTeamID().then(function(output) {
        output.teamCount += 1;
        eventRegister.updateTeamID(output).then(function(updatedTeamObj) {
            eventReg.teamID = updatedTeamObj.teamCount;

            eventRegister.updateUser(eventReg).then(function(result2) {
                res.send({
                    status: true,
                    data: result2
                });
            });

        });
    });
});


app.use(express.static('dist'));
app.get('*', (req, res) => {
    console.log(__dirname);
    // res.sendFile(path.resolve('./dist/index.html')) 
    res.redirect('https://blitz20.herokuapp.com/');
})
console.log(process.env.PORT);
app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));