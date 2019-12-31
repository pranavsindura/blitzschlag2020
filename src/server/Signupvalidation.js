const userModel = require('./model').userModel;
const idModel = require('./idModel').idModel;

async function retrieveBlitzID() {
    let ids = await idModel.findOne({}, function(err, result) {
        if (err) {
            console.log('Error retrieving IDs');
            return undefined;
        }
        return result;
    });
    return ids;
}

async function updateBlitzID(obj) {
    let blitzObj = await idModel.findOneAndUpdate({ _id: obj._id }, { blitzCount: obj.blitzCount }, { new: true }, (err, data) => {
        if(err)
            return undefined;
        return data;
    });
    console.log('blitzObj', blitzObj);
    return blitzObj;
}

async function signUpValid(user) {
    let emailID = user.email;
    // let obj = new userModel(user);
    let details = await userModel.findOne({ email: emailID }, function(err, result) {
        if (err) {
            console.log('New user');
        }
    });
    console.log(details);
    if (details === null) {
        return details;
    } else {
        return undefined;
    }
}

async function userSave(user) {
    let obj = new userModel(user);
    let x = await obj.save().catch(err => {
        console.log('Error saving data');
        return undefined;
    });
    return x;
}

module.exports = {
    signUpValid,
    retrieveBlitzID,
    updateBlitzID,
    userSave
}