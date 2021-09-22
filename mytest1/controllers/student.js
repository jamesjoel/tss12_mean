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

routes.get("/delete/:a", (req, res)=>{
    var id = req.params.a;
    var objId = mongodb.ObjectId(id);
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss12");
        db.collection("student").remove({ _id : objId }, ()=>{
            res.redirect("/student");
        })
    })
})

routes.get("/edit/:a", (req, res)=>{
    var id = req.params.a;
    var objId = mongodb.ObjectId(id);
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss12");
        db.collection("student").find({ _id : objId}).toArray((err, result)=>{
            var pagedata = { result : result[0] };
            res.render("student/edit", pagedata);
        })
    })
})

routes.post("/update/:a", (req, res)=>{
    var id = req.params.a;
    var objId = mongodb.ObjectId(id);
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss12");
        db.collection("student").updateMany({_id : objId}, { $set : req.body }, ()=>{
            res.redirect("/student");
        })
    })
})


module.exports = routes;
/*

db.coll.insert(obj, callback)

db.coll.remove(obj, callback)

db.coll.update(obj, {$set : obj}, callback)

db.call.find().toArray(callback)





*/