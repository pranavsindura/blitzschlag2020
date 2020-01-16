let idModel = require('./idModel').idModel;
let userModel = require('./model').userModel;
let mongoose = require('mongoose');
let { eventSchema } = require('./modelEventSociety');
let { categories } = require('./modelEventSociety');

async function retrieveTeamID() {
    let ids = await idModel.findOne({}, function(err, result) {
        if (err) {

        }
    });
    return ids;
}

async function updateTeamID(obj) {
    let teamObj = await idModel.findOneAndUpdate({}, { teamCount: obj.teamCount }, { new: true }, (err, data) => {

    });
    console.log('teamObj', teamObj);
    return teamObj;
}

async function updateUser(event) {
    let addEvent;
    addEvent = {
        name: event.eventName,
        teamID: event.teamID,
        teamName: event.teamName,
        teamSize: event.teamSize
    };
    console.log(addEvent);
    (event.blitzID).forEach(id => {
        userModel.find({ blitzID: id }, (err, user) => {
            if (err) {
                console.log(err);
            } else {
                let eventArray = user[0].events;
                eventArray.push(addEvent);
                userModel.findOneAndUpdate({ blitzID: id }, { events: eventArray }, () => {});
            }
        });
    });
    return true;
}

async function retrieveUsers(ids) {
    let users = await userModel.find({ blitzID: ids }, (err, result) => {
        if (err) {
            console.log('ID not found');
        }
    });
    return users;
}

async function validate(obj) {
    let ids = obj.blitzID;
    let pins = obj.blitzPIN;
    let dup = new Set(ids);
    if(ids.length != dup.size)
        return undefined;
    let f = retrieveUsers(ids).then(function(users) {
        console.log('users',users);
        if(users.length != ids.length)
            return undefined;
        let flag = true;
        let i = 0;
        for (user of users) {
            if (user.blitzPIN !== pins[i]) {
                flag = undefined;
                break;
            }
            i++;
        }
        return flag;
    });
    return f;
}

async function retrieveCategoryDetails(eid) {
    let category = await categories.findOne({ eventID: eid }, function(err, result) {
        if (err) {
            console.log('error retrieveing category');
        }
    });
    return category;
}

module.exports = {
    updateUser,
    retrieveTeamID,
    updateTeamID,
    validate,
    retrieveCategoryDetails,
    retrieveUsers
};