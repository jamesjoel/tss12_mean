 
var express = require("express");

 
var app = express(); 
 
app.use(express.static(__dirname+"/assets"));


app.get("/", (req, res)=>{
    // res.send("welcome");
    res.sendFile(__dirname+"/home.html");
});
app.get("/about", (req, res)=>{
    // res.send("welcome");
    res.sendFile(__dirname+"/about.html");
});
 
app.get("/contact", (req, res)=>{
    // res.send("welcome");
    res.sendFile(__dirname+"/contact.html");
});
app.get("/help", (req, res)=>{
     res.send("helllp page");
    //res.sendFile(__dirname+"/.html");
});
 
 //console.log(__dirname);
 //console.log(__filename);

app.listen(3000, ()=>{


    console.log("server running");
})


 