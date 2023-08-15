const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    avatar: {
        type: String
    },
    username: {
        type: String
    },
    name: {
        type: String,
    },
    password: {
        type: String
    },
    designation: {
        type: String
    },
    assignedProjects: Array
}, {
    timestamps: true
})


const UserModel = mongoose.model('Users', schema)

module.exports = UserModel;