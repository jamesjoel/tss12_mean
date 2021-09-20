var express = require("express");
var routes = express.Router();

var home = require("../controllers/home");


 
routes.use("/",home);
 

module.exports = routes;