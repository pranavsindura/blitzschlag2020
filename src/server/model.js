const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    mob: Number,
    college: String,
    collegeID: String,
    events: [{
        name: String,
        teamID: Number,
        teamName: String,
        teamSize: Number
    }],
    blitzID: Number,
    blitzPIN: Number,
    isMNIT: Boolean,
    accomodation: Boolean,
    transactionID: String
});

let userModel = new mongoose.model('userModel', userSchema);

module.exports = {
    userModel
};