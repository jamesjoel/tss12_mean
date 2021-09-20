var express =require("express");
var routes =express.Router();
var MongoClient =require ("mongodb").MongoClient;

routes.get("/",(req,res)=>{
        MongoClient.connect("mongodb://localhost:27017",(err,con)=>{
        var db=con.db("hotel");
        db.collection("menu").find().toArray((err,result)=>{
        var pagedata={result:result};
              res.render("order/index",pagedata);
        })
    })
    
});
routes.post("/save",(req,res)=>{
       // console.log(req.body);
        MongoClient.connect("mongodb://localhost:27017",(err,con)=>{
        var db=con.db("order");
        db.collection("customerorder").insertOne(req.body,()=>{
               res.redirect("/order");
        });
    });
});

routes.get("/",(req,res)=>{
        MongoClient.connect("mongodb://localhost:27017",(err,con)=>{
        var db=con.db("order");
        db.collection("customerorder").find().toArray((err,result1)=>{
         var pagedata1={result1:result1};
              res.render("order/index",pagedata1);
          });
     });
});
module.exports=routes;