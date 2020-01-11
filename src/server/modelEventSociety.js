const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema({
    socID: Number,
    societyName: String,
    eventID: Number,
    eventName: String
});

const categories = new mongoose.model('Events And Societies', categoriesSchema);

const eventSchema = new mongoose.Schema({
    socID: Number,
    socName: String,
    eventID: Number,
    eventName: String,
    blitzID: Number,
    teamID: Number,
    teamName: String,
    teamSize: Number
});

const eventModel = new mongoose.model('Events', eventSchema);

module.exports = {
    categories,
    eventModel
}