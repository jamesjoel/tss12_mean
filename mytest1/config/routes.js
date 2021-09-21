var express = require("express");
var routes = express.Router();

routes.use("/", require("../controllers/home"));
routes.use("/about", require("../controllers/about"));
routes.use("/contact", require("../controllers/contact"));
routes.use("/student", require("../controllers/student"));


module.exports = routes;