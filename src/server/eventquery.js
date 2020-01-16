let eventsModel = require('./modelofevents').eventsModel;

function showEventDetails(ID) {
    eventsModel.findOne({ eventID: ID }, function(err, eventDetails) {
        if (err) {
            // console.log('Incorrect Event ID');
        }
        return eventDetails;
    });
}

module.exports = {
    showEventDetails
};