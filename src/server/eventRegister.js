let userModel = require('./model').userModel;

function updateUser(event) {
    let addEvent = {
        name: event.eventName,
        teamID: event.teamID,
        teamName: event.teamName,
        teamSize: event.teamSize
    };
    console.log(addEvent);
    (event.blitzID).forEach(id => {
        console.log(id);
        userModel.find({ blitzID: id }, (err, user) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(user[0].events);
                    let eventArray = user[0].events;
                    eventArray.push(addEvent);
                    // console.log(eventArray);
                    userModel.findOneAndUpdate({ blitzID: id }, { events: eventArray }, () => {
                        console.log('updated');
                    });
                }
            })
            // userModel.findOneAndUpdate({ blitzID: id }, { events: addEvent }, () => {
            //     console.log('updated');
            // });
    });
};

module.exports = {
    updateUser
}