const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
    email: String,
    password: String
})

//1-model name, 2-schema, 3-collection name
module.exports = mongoose.model('user', userSchema, 'users' )