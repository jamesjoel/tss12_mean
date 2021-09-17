var express = require("express");
var routes = express.Router();

var MongoClient = require("mongodb").MongoClient;

var mongodb = require("mongodb");

routes.get("/", (req, res)=>{
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss12");
        db.collection("employee").find().toArray((err, result)=>{
            // console.log(result);
            // var a = "rohit";
            var pagedata = { result : result };
            res.render("employee/index", pagedata);
        });
    });
});


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

routes.get("/detail/:a", (req, res)=>{
    // console.log(req.params.a);
    var id = req.params.a; 
    // 614446e87e9c364e37f6b749 --- ObjectId(614446e87e9c364e37f6b749)
    var newid = mongodb.ObjectId(id);
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss12");
        db.collection("employee").find({ _id: newid }).toArray((err, result)=>{
            // console.log(result);
            var pagedata = { result : result[0] };
            res.render("employee/detail", pagedata);
        })
    })
})

module.exports = routes;

/*
    res.send()
    res.sendFile()
    res.render()
    res.redirect()


    Create (insert)
    Retrive (find, get)
    Update
    Delete









*/