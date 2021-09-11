var express = require("express");
var routes = express.Router();

var home = require("../controllers/home");
var about = require("../controllers/about");
var contact = require("../controllers/contact");
var user = require("../controllers/user");


routes.use("/", home);
routes.use("/about", about);
routes.use("/contact", contact);
routes.use("/user", user);


module.exports = routes;

/*
:3000


:3000/about
:3000/about/info
:3000/about/more



:3000/contact
:3000/contact/demo

:3000/user
:3000/user/profile
:3000/user/profile/changeprofile
:3000/user/myaccount
*/