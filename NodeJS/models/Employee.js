const mongoose = require('mongoose')
const Schema = mongoose.Schema
const employeeSchem = new Schema({
    name:{type: String},
    surname:{type: String},
    address:{type: String},
    email:{type: String},
    phone:{type: String},
    age:{type: Number},
    avatar:{type: String}
},
 {timestamps: true})


    
const Employee =  mongoose.model('Employee', employeeSchem)
module.exports = Employee


