const express = require("express");
const mongoose = require("mongoose");
var multiparty = require('multiparty');
const Order = require("./model/order");

const app = express();
const PORT = 4000;
const IMAGE_UPLOAD_DIR = "./public/images"
const IMAGE_BASE_URL = "http://localhost:4000/images/"

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const orders = await Order.find({});
        res.send(orders)

    } catch (err) {
        console.log(err);
        res.send({ error: err.message })

    }

});

app.post("/add-order", async (req, res) => {
    var form = new multiparty.Form({ uploadDir: IMAGE_UPLOAD_DIR });

    form.parse(req, async function (err, fields, files) {
        if (err) return res.send({ error: err.message });

        console.log(`fields = ${JSON.stringify(fields, null, 2)}`)
        console.log(`files= ${JSON.stringify(files, null, 2)}`)

        const imagePath = files.image[0].path;
        const imageFileName = imagePath.slice(imagePath.lastIndexOf("\\") + 1);
        const imageURL = IMAGE_BASE_URL + imageFileName;
        console.log(imageURL);

        const order = new Order({
            title: fields.title[0],
            price: fields.price[0],
            status: fields.status[0],
            image: imageURL

        })
        try {
            const ord = await order.save();
            console.log(`Order =  ${JSON.stringify(fields, null, 2)}`);
            res.send(ord);

        } catch (err) {
            console.log(err);
            res.send({ error: err.message })

        }


    })


})

app.listen(PORT, () => {
    console.log(`Server Running at : http://localhost:${PORT}`);
})


mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1/CrudDB", {

    useNewUrlParser: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("conncted to DB")).catch(err => console.log("Connection Failed"))


