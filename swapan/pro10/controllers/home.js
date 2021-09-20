var express =require("express");
var routes =express.Router();
var MongoClient = require("mongodb").MongoClient;

routes.get("/",(req,res)=>{
    MongoClient.connect("mongodb://localhost:27017",(err,con)=>{
        var db=con.db("hotel");
        db.collection("menu").find().toArray((err,result)=>{
            // console.log(result);
            var pagedata={result:result}
            res.render("home/index",pagedata)
        })
    })
    
});

module.exports=routes;