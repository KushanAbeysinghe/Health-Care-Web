const express = require('express');
var router = express.Router();

var { Employee } = require('../models/employee');




router.get('/',(req, res) => {
    Employee.find((err,docs) => { 
        if (!err) { res.send(docs); }  
        else { console.log('Error in Retriving Employees:' + JSON.stringify(err, undefined, 2)); } 
    });
});

router.post('/',(req,res) =>{
    var emp = new Employee({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        feedback: req.body.feedback,
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }  
        else { console.log('Error in Employees save:' + JSON.stringify(err, undefined, 2)); } 
    });
});

module.exports = router;