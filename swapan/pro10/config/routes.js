var express= require("express");
var routes= express.Router();

var home = require("../controllers/home");
var about= require("../controllers/about");
var order= require("../controllers/order");


routes.use("/",home);
routes.use("/about",about);
routes.use("/order",order);

module.exports=routes;