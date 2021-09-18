var express = require("express");
var app = express();

app.use(express.static(__dirname+"/assets"));

app.set("view engine", "ejs");
// the app.set is reco to nodejs for which template engine we are using

app.get("/", (req, res)=>{
    var a = "Rohit Verma";
    var b = "The Stepping Stone";
    var pageData = { a : a, b : b, c : "Indore" };
    res.render("home", pageData);
})

app.get("/about", (req, res)=>{
    var arr = ["red", "green", "blue", "yellow", "pink", "black"];
    var category = ["Home Appliance", "Electronics", "Mobiles & Computers", "Fashion Men", "Fashion Women"];
    var pageData = { color : arr, cate : category };
    res.render("about", pageData);
})


app.listen(3000, ()=>{
    console.log("server running");
})