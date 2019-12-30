const Model = require('./model.js');

async function userValid(user) {
    let id = user.blitzID;
    let pin = user.blitzPIN;
    let valid = await Model.userModel.findOne({ blitzID: id }, function(err, userDetails) {
        if (err) {
            console.log('User not found');
            return 0;
        }
    });
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