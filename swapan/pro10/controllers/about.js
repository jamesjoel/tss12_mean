var express =require("express");
var routes =express.Router();
var MongoClient =require("mongodb").MongoClient;

routes.get("/",(req,res)=>{
    res.render("about/index");
});

routes.post("/save",(req,res)=>{
    console.log(req.body);
    
    MongoClient.connect("mongodb://localhost:27017",(err,con)=>{
        var db=con.db("hotel");
        db.collection("menu").insertOne(req.body,()=>{
            res.redirect("/about");
        });
    });
    
});

module.exports=routes;