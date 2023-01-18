const express = require("express");
var multiparty = require('multiparty');

const app = express();
const PORT = 4000;
const IMAGE_UPLOAD_DIR = "./public/images"
const IMAGE_BASE_URL = "http://localhost:4000/images/"

app.get("/",(req,res) =>{
    console.log("Home..")
    res.send("Home")
});

app.post("/add-order",(req,res) => {
        var form = new multiparty.Form({uploadDir: IMAGE_UPLOAD_DIR});
    
    form.parse(req, function(err, fields, files){
        if(err) return res.send({error : err.message});

        console.log(`fields = ${JSON.stringify(fields,null, 2)}`)
        console.log(`files= ${JSON.stringify(files,null, 2)}`)

        const imagePath = files.image[0].path;
        const imageFileName = imagePath.slice(imagePath.lastIndexOf("\\")+ 1);
        const imageURL = IMAGE_BASE_URL + imageFileName;
        console.log(imageURL);


    })


})

app.listen(PORT, () =>{
    console.log(`Server Running at : http://localhost:${PORT}`);
})





