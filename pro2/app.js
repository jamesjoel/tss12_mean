var express = require("express");
var app = express();

// create your routes

// the app.get() is used for create routes.
app.get("/about", (req, res)=>{ // localhost:3000/about
    res.send("<h1>this is About Page</h1>");
});

app.get("/contact", (req, res)=>{
    res.send("<h1>Contact Us</h1>");
})

app.get("/help", (req, res)=>{
    res.send("<h1>Help Page</h1>");
})

app.get("/", (req, res)=>{
    res.send("<h1>Home Page</h1>");
})




app.listen(3000, ()=>{
    console.log("server running");
})
/*

ml-1            me-1

*/