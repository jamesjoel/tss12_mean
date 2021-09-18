var express = require("express");
var routes = express.router();

var  home = require("../controllers/home");

var about = require("../controllers/about");

var  contact = require("../controllers/contact");

var   help = require("../controllers/help");


routes.use( "/",  home);
routes.use( "/about",about);
routes.use( "/contact", contact);
routes.use( "/help", help);

module.exports = routes;



