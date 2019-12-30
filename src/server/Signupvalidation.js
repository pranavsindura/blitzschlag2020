const userModel = require('./model').userModel;

async function signUpValid(user) {
    let emailID = user.email;
    let obj = new userModel(user);
    obj.blitzID = 1919;
    let details = await userModel.findOne({ email: emailID }, function(err, result) {
        if (err) {
            console.log('New user');
        }
    });
    console.log(details);
    if (details === null) {
        //add blitzID
        obj.save((err, res) => {
            if (err) {
                return console.log('Not saved', err);
            }
            console.log('Saved');
            return obj;
        });
        return obj;
    } else {
        return undefined;
    }
}

module.exports = {
    signUpValid
}