const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    gender: String,
    email: String,
    mob: String,
    course: String,
    year: String,
    branch: String,
    city: String,
    college: String,
    collegeID: String,
    events: [{
        name: String,
        teamID: Number,
        teamName: String,
        teamSize: Number
    }],
    blitzID: String,
    blitzPIN: String,
    isMNIT: Boolean,
    accomodation: Boolean,
    transactionID: String
});

let userModel = new mongoose.model('userModel', userSchema);

module.exports = {
    userModel
};