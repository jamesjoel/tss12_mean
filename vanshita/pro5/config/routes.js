var express = require("express");
var routes = express.Router();


 var home = require( " ../controllers/home");
 var about = require( " ../controllers/ about");
 var contact = require( " ../controllers/contact");

 routes.use("/", require(home));
 routes.use("/about", require(about));
 routes.use("/contact", require(contact));

routes.use( "/", home)
routes.use( "/about", about)
routes.use( "/contact", contact)




module.exports = routes;