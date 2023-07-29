const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    endpoint: {
        type: String,
    },
    method: {
        type: String,
    },
    parameters: {
        type: JSON,
    },
    discription: {
        type: String
    },
    parameterType: {
        type: String,
    },
    productionUrl: {
        type: String,
    },
    testedAttachment: {
        type: String,
    },
    comments: {
        type: Array
    },
    accessHistory: Object,
    projectId: String,
})


const APIModel = mongoose.model("API", schema);

module.exports = APIModel