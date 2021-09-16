var express= require("express");
var routes = express.Router();
var MongoClient = require("mongodb").MongoClient;

routes.get("/", (req, res)=>{
    res.render("student/index");
});

routes.post("/save", (req, res)=>{
    // console.log(req.body);
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss12");
        db.collection("student").insertOne(req.body, ()=>{
            res.redirect("/student");
        })
    })
})


module.exports = routes;