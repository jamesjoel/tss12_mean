var express = require("express");
var app = express();

var routes = require("./config/routes");  
 

app.use(express.static(__dirname+"/assets"));

app.set("view engine", "ejs");

app.get( "/" , (req, res)=>{
    res.render("home");
})

app.get( "/about" , (req, res)=>{
    res.render(" about");
})

app.get( "/contact" , (req, res)=>{
    res.render("contact");
})

app.use(routes);


app.listen(3000, ()=>{
    console.log("server running");
})