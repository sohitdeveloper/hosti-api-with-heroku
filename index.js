const express = require("express");
const app = express();

// players data
const importData = require('./data.json')
let port = process.env.PORT || 3000;

app.get('/players',(req , res) =>{
    res.send(importData)
})

app.get('/',(req , res) =>{
    res.send("Hello world")
})

app.listen(port,() =>{
    console.log(`App is listening on port http://localhost:${port}`);
})