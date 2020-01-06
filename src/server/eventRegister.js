let idModel = require('./idModel').idModel;
let userModel = require('./model').userModel;

async function retrieveTeamID() {
    let ids = await idModel.findOne({}, function(err, result) {
        if (err) {

        }
    });
    return ids;
}

async function updateTeamID(obj) {
    let teamObj = await idModel.findOneAndUpdate({ _id: obj._id }, { teamCount: obj.teamCount }, { new: true }, (err, data) => {

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
    return event;
}

module.exports = {
    updateUser,
    retrieveTeamID,
    updateTeamID
}