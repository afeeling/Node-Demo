/**
 * 用户信息表
 */
const mongoose = require('mongoose')
let RegisterInfo = mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: Number
    },
    mobile: {
        type: Number
    },
    age: {
        type: Number
    },
    email: {
        type: String
    }
})

module.exports = mongoose.model('Register', RegisterInfo);