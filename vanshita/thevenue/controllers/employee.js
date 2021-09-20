var express = require("express");
var routes = express.Router();

routes.get("/", (req, res)=>{
    res.render("employee/index"); 
});

 

module.exports = routes; 