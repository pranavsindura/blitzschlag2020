let mongoose = require('mongoose');

let upiPaySchema = new mongoose.Schema({
    blitzID: String,
    firstName: String,
    lastName: String,
    mob: String,
    email: String,
    amount: Number,
    transactionID: String,
    approval: boolean
});

let upiPayModel = new mongoose.model('UPI Payments', upiPaySchema);

module.exports = {
    upiPayModel
}