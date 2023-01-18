const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    name: { type: String },
    email: { type: String },
    subject: { type: String },
    feedback: { type: String }
});

module.exports = { Employee };