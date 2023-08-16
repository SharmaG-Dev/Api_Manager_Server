const UserModel = require("../Model/UserModel");
require('dotenv').config();
const { Encrypt, Dcrypt } = require("./Misc/EncryptDcrypt");
const jwt = require('jsonwebtoken')

const company = process.env.COMPANYNAME




const GetUserSignup = async (req, res) => {
    const formdata = req.body;

    // check the user is already register or not 
    const isFound = await UserModel.findOne({ username: formdata.username })
    if (isFound) return res.status(409).json({ error: true, message: "Username is Already Registered" })

    // encrypt the password 
    const hashedPassword = Encrypt(formdata.password, process.env.KEY).toString()

    const userData = new UserModel({
        ...formdata,
        password: hashedPassword
    })

    try {
        const isSubmit = await userData.save()
        if (!isSubmit) return res.status(400).json({ error: true, message: "server not responded" })

        res.status(200).json({ error: false, data: isSubmit, message: `${isSubmit.name} Welcome To ${company} ` })
    } catch (error) {
        res.status(500).json({ error })
    }
}



const GetUserLogin = async (req, res) => {

    const { username, password } = req.query;
    try {
        const isExist = await UserModel.findOne({ username: username })
        if (!isExist) return res.status(404).json({ error: true, message: `No user Found ${username}` })

        // compare the password  
        const isMatched = Dcrypt(isExist.password, process.env.KEY) === password
        if (!isMatched) return res.status(400).json({ error: true, message: "Password Incorrect" })

        isExist.password.remove()

        // generate the jwt
        const accessToken = jwt.sign(isExist, process.env.SECRETTOKEN)
        res.header('accessToken', accessToken)
        res.status(200).json({ error: false, data: isExist, message: `Welcome ${isExist.name}` })
    } catch (error) {
        res.status(500).json({ error })
    }
}



// update the user 
const GetUpdateTheUser = async (req, res) => {
    const updatedData = req.body;
    const id = req.body._id

    try {
        const isUpdated = UserModel.findByIdAndUpdate(id, updatedData, { new: true })
        if (!isUpdated) return res.status(400).json({ error: true, message: "Updation failed ! Try again" })

        res.status(200).json({ error: false, data: isUpdated, message: "updated successfully" })
    } catch (error) {
        res.status(500).json({ error })
    }
}


// delete all the user 
const GetDeleteAllUser = async (req, res) => {
    try {
        const result = await UserModel.deleteMany({})
        if (!result) return res.status(400).json({ error: true, message: "Deletion Failed" })

        res.status(200).json({ error: false, message: "User Deleted successfully" })
    } catch (error) {
        res.status(500).json({ error })
    }
}
const DeleteUserById = async (req, res) => {
    try {
        const result = await UserModel.deleteOne({ _id: req.params.id })
        if (!result) return res.status(400).json({ error: true, message: "Deletion Failed" })

        res.status(200).json({ error: false, message: "User Deleted successfully" })
    } catch (error) {
        res.status(500).json({ error })
    }
}

// get single user details

const GetUserById = async (req, res) => {
    const id = req.params.id

    try {
        const isFound = await UserModel.findById(id)
        if (!isFound) return res.status(404).json({ error: true, message: "User Not Found" })
        res.status(200).json({ error: false, data: isFound, message: "user fetched successfully" })
    } catch (error) {
        res.status(500).json({ error })
    }
}

// Get ALl user
const GetALlUser = async (req, res) => {
    const id = req.params.id

    try {
        const isFound = await UserModel.findById({})
        if (!isFound) return res.status(404).json({ error: true, message: "User Not Found" })
        res.status(200).json({ error: false, data: isFound, message: "user fetched successfully" })
    } catch (error) {
        res.status(500).json({ error })
    }
}


module.exports = { GetUserSignup, GetUserLogin, GetUpdateTheUser, GetDeleteAllUser, DeleteUserById, GetUserById, GetALlUser }

