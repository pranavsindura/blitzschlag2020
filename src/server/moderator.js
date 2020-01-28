let { moderatorModel } = require('./model');
let { userModel } = require('./model');
let { eventModel } = require('./modelEventSociety');

async function validateMod(id, pin) {
    let mod = await moderatorModel.findOne({ blitzID: id }, (err) => {
        if (err) {
            console.log('err');
        }
    });
    if (mod.blitzPIN === pin) {
        let data = {
            eventID: mod.eventID,
            eventName: mod.eventName
        }
        return data;
    } else {
        return false;
    }
}

async function findUsersOfEvent(id) {
    let result = [];
    let obj = {
        blitzID: '',
        firstName: '',
        teamID: 0,
        teamName: '',
        teamSize: 0,
        mob: '',
        email: ''
    };

    let data = await eventModel.find({ eventID: id }, (err) => {
        if (err) {
            console.log('not found');
        }
    });
    if (data) {
        let ids = [];
        for (x of data) {
            ids.push(x.blitzID);
        }
        let users = await userModel.find({ blitzID: ids }, (err) => {
            if (err) {
                console.log('error in user model');
            }
        });
        if (users) {
            console.log('ids', ids.length);
            console.log('users', users.length);
            for (let i = 0; i < users.length; i++) {
                obj.blitzID = users[i].blitzID;
                obj.firstName = users[i].firstName;
                obj.teamID = data[i].teamID;
                obj.teamName = data[i].teamName;
                obj.teamSize = data[i].teamSize;
                obj.mob = users[i].mob;
                obj.email = users[i].email;
                result.push(obj);
            }
            console.log('result', result);
        }
    } else {
        console.log('no data');
        return false;
    }
    return result;
}

module.exports = {
    validateMod,
    findUsersOfEvent
}