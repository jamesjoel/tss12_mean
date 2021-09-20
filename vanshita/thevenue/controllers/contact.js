var express = require("express");
var routes = express.Router();

routes.get("/", (req, res)=>{
    res.render("contact/index");
});

 

module.exports = routes; 
  