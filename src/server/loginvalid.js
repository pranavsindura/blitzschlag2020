const Model = require('./model.js');

async function userValid(user) {
    let id = Number(user.blitzID);
    let pin = Number(user.blitzPIN);
    console.log(id, pin);
    let valid = await Model.userModel.findOne({ blitzID: id }, function(err, userDetails) {
        if (err) {
            console.log('User not found');
            return undefined;
        }
        console.log('userDetails',userDetails);
        return userDetails;
    });
    console.log('valid', valid);
    if (valid) {
        if (valid.blitzPIN === pin) {
            return valid;
        }
        return 1;
    } else {
        return undefined;
    }
}

module.exports = {
    userValid
};