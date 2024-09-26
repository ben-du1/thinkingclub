const express = require("express")

const app = express()

app.get('/',(req,res) => {
    res.sendFile(__dirname+"/public/index.html");
})

app.listen(80,(req,res) => {
    console.log("thinking club running")
})