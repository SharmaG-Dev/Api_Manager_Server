const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    projectName: String,
    colaborated: Array,
    projectStatus: String,
    accessHistory: Object,
    projectOwnerId: String,
}, {
    timestamps: true
})

const ProjecModel = mongoose.model("Projects", schema)

module.exports = ProjecModel;