var express = require("express");
var routes = express.Router();

routes.get("/", (req, res)=>{
    res.render("help/index");
});

 

module.exports = routes; 