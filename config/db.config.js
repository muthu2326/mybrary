require('dotenv').config()

const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true})

const connection = mongoose.connection

module.exports = connection