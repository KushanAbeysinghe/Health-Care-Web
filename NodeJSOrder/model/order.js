const mongoose = require("mongoose");

const orderSchema = new  mongoose.Schema({
    title:{
        type:String,
        require: true,
    },
    price:{
        type:String,
        require: true,
    },
    status:{
        type:String,
        require: true,
    },
    image:{
        type:String,
    },
})

const Order = mongoose.model("orders", orderSchema);
module.exports = Order;