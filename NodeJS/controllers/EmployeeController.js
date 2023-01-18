const Employee = require('../models/Employee')
const express = require('express');
var router = express.Router();


const index = (req, res, next) =>{
    Employee.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An Error!'
        })
    })
}
router.get('/',(req, res) => {
    Employee.find((err,docs) => { 
        if (!err) { res.send(docs); }  
        else { console.log('Error in Retriving Employees:' + JSON.stringify(err, undefined, 2)); } 
    });
});

const show = (req, res, next) => {
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
        message: 'an error!'
         })
    })
}

const store = (req, res,) => {
    var employee = new Employee({
        name: req.body.name,
        surname: req.body.surname,
        address: req.body.address,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age,
       

    });

    if(req.file){
        employee.avatar = 'http://localhost:3000/uploads/'+ req.file.filename
    }



    employee.save()
    .then(response => {
        res.json({
            message: 'Employee Added!'
        })
    })
    .catch(error =>{
        res.json({
            message: 'Employee not Added!'
        })
    })


}

module.exports = {index, show, store }

