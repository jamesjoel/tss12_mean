var express = require("express");
var routes = express.Router();
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var mongoUrl = "mongodb://localhost:27017";


routes.get("/", (req, res) => {
    MongoClient.connect(mongoUrl, (err, con) => {
        var db = con.db("tss12");
        db.collection("student").find().toArray((err, result)=>{
            var pagedata = { result : result };
            res.render("student/index", pagedata);
        })
    })
})

routes.post("/", (req, res)=>{
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss12");
        db.collection("student").insertOne(req.body, ()=>{
            res.redirect("/student");
        })
    })
})


module.exports = routes;
