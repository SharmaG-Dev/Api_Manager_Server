const express = require('express')
require('./connection')
require('dotenv').config()
const app = express();

const port = process.env.PORT








app.listen(port, () => {
    console.log(`API Server Started At ${port}`)
})