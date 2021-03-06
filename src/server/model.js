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
    transactionID: String,
    hospitality: Array,
    paymentHistory: Array
});

let paySchema = new mongoose.Schema({
    pID: Number,
    categoryName: String,
    amount: Number
});

let moderatorSchema = new mongoose.Schema({
    blitzID: String,
    blitzPIN: String,
    eventID: Array,
    eventName: Array
});

let moderatorModel = new mongoose.model('Moderator', moderatorSchema);

let payCategoryModel = new mongoose.model('Payment Categories', paySchema);

let userModel = new mongoose.model('Participants', userSchema);

module.exports = {
    userModel,
    payCategoryModel,
    moderatorModel
};