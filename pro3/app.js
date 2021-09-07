// require the express module
var express = require("express");

// call the express constructor
var app = express();

// localhost:3000
// localhost:3000/about
// localhost:3000/contact


app.get("/", (req, res)=>{
    // res.send("welcome");
    res.sendFile(__dirname+"/home.html");
});

app.get("/about", (req, res)=>{
    
    res.sendFile(__dirname+"/about.html");
})
app.get("/contact", (req, res)=>{
    
    res.sendFile(__dirname+"/contact.html");
})

// console.log(__dirname);
// console.log(__filename);


app.listen(3000, ()=>{
    console.log("server running");
})


/*
    res.send() ----------------     send data/text to client

    res.sendFile() ----------       send html file to client

    res.render() ---------          send file and data both to client

    res.redirect() ---------        redirect to another url/route

*/