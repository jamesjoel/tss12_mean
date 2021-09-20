var express = require("express");
var routes = express.Router();


routes.get("/", (req, res)=>{
    res.render("home/index");
});

module.exports = routes;