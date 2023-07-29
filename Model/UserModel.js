const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    avatar:{
        type:String
    },
    username: {
        type: String
    },
    Name: {
        type: String,
    },
    password: {
        type: String
    },
    designation: {
        type: String
    },
})


const UserModel = mongoose.model('Users', schema)

module.exports = UserModel;