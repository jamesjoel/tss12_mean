var express = require("express");
var routes = express.Router();
// :3000/about/info
routes.get("/info", (req, res)=>{
    res.send("<h1>about ----> info </h1>");
});
// :3000/about/more
routes.get("/more", (req, res) => {
    res.send("<h1>about ----> more </h1>");
});
// :3000/about
routes.get("/", (req, res) => {
    res.send("<h1>about </h1>");
});

module.exports = routes;