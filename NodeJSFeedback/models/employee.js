const mongoose = require('mongoose');

var Employee = mongoose.model('Feedback', {
    name: { type: String },
    email: { type: String },
    subject: { type: String },
    feedback: { type: String }
});

module.exports = { Employee };