const ProjecModel = require("../Model/ProjectModel");
const UserModel = require("../Model/UserModel");
const { RegMail, transporter } = require("../model/mailersetup");
const { Dcrypt } = require("./Misc/EncryptDcrypt");
require('dotenv').config()
const nodemailer = require('nodemailer')

// send mail 

const SendMail = async (req, res) => {
    const { email } = req.params
    const { subject, content } = req.body

    userResult.password = pass
    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: subject,
        text: content
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(400).json({ error: true, message: 'mail not sent' })
        } else {
            res.status(200).json({ error: false, message: "email sent successfully" })
        }
    })
}
