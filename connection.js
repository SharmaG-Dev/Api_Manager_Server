const mongoose = require('mongoose')
require('dotenv').config();

const url = process.env.MONGO_DB


mongoose.connect(url).then(() => {
    console.log('Database connected successfully')
}).catch((error) => {
    console.log(error)
})


module.exports = mongoose