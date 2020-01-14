const mongoose = require('mongoose');

let idSchema = new mongoose.Schema({
    teamCount: {
        type: Number,
        default: 0
    },
    blitzCount: {
        type: Number,
        default: 0
    }
});

let idModel = new mongoose.model('Counts', idSchema);

module.exports = {
    idModel
}