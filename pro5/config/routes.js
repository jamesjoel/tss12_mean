var express = require("express");
var routes = express.Router();

// express.Router() is a pre-define fun for help create routes in a diff file.

routes.get("/", (req, res) => {
    res.render("home");
});
routes.get("/about", (req, res) => {
    res.render("about");
});
routes.get("/contact", (req, res) => {
    res.render("contact");
});
module.exports = routes;