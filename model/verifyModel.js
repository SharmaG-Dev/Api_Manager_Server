const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    otp: String,
    verificationType: String,
    verificationExpireTime: Date,
    verifiedStatus: Boolean
}, {
    timestamps: true
})


const VerificationModel = mongoose.model('verifications', schema)

module.exports = VerificationModel;