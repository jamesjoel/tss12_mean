var express = require("express");
var app = express();

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.get("/about/:a/:b/:c/:d", (req, res)=>{
    // console.log(req.params);
    console.log(req.params.a);
    
    res.sendFile(__dirname+"/about.html");
})

app.listen(3000);