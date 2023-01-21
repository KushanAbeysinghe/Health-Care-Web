const mongoose = require("mongoose");

const orderSchema = new  mongoose.Schema({
    name:{
        type:String,
        require: true,
    },
    surname:{
        type:String,
        require: true,
    },
    address:{
        type:String,
        require: true,
    },
    email:{
        type:String,
        require: true,
    },
    phone:{
        type:String,
        require: true,
    },
    age:{
        type:String,
        require: true,
    },
    image:{
        type:String,
    },
})

const Order = mongoose.model("orders", orderSchema);
module.exports = Order;