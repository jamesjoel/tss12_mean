var express = require("express");
var app = express();

app.use( express.static(__dirname+"/assets"));
app.set("view engine","ejs");

 
app.get("/", (req, res) => {
    
    res.render("home");
})

app.get("/about", (req, res) => {
    
    res.render("<h1>about</h1>");
})

app.get("/contact", (req, res) => {
    
    res.render("<h1>contact</h1>"); 
})

app.listen(3000, ()=>{
    console.log("server running");
})
