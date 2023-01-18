const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParase = require('body-parser')
const cors = require('cors')

const EmployeeRoute = require('./routes/employee')

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://127.0.0.1/C')
const db = mongoose.connection

db.on('error',(err) => {
    console.log(err)
})

db.once('open',() => {
    console.log('Database connection Established!!!!')
})

const app = express()

app.use(morgan('dev'))
app.use(bodyParase.urlencoded({extended: true}))
app.use(bodyParase.json())
app.use('/uploads', express.static('uploads'))
app.use(cors({ origin:'http://localhost:4200' }));

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> {
    console.log(`server is running on port ${PORT}`)
})



app.use('/api/employee', EmployeeRoute);