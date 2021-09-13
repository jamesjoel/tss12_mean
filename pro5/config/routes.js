var express = require("express");
var routes = express.Router();

var home = require("../controllers/home");
var about = require("../controllers/about");
var contact = require("../controllers/contact");
var help = require("../controllers/help");
var emp = require("../controllers/employee");


routes.use("/", home);
routes.use("/about", about);
routes.use("/contact", contact);
routes.use("/help", help);
routes.use("/employee", emp);

module.exports = routes;