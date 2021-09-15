var express = require("express");
var routes = express.Router();

var MongoClient = require("mongodb").MongoClient;

routes.get("/", (req, res)=>{
    
    res.render("employee/index");
})


routes.post("/save", (req, res)=>{
    // console.log(req.body);
    // MongoClient.connect(connection URL, callback fun)
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        // use tss12
        var db = con.db("tss12");
        // db.student.insert({})
        db.collection("employee").insertOne(req.body, ()=>{
            // console.log("DONE-------------");
            res.redirect("/employee");
        });
    });
})

module.exports = routes;

/*
    res.send()
    res.sendFile()
    res.render()
    res.redirect()

*/