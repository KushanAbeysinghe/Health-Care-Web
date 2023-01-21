const mongoose = require('mongoose');

var Employee = mongoose.model('order', {
    name: { type: String },
    surname: { type: String },
    address: { type: String },
    email: { type: String },
    phone: { type: String },
    age: { type: String },
    image: { type: String }
});

module.exports = { Employee };