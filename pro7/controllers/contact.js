var express = require("express");
var routes = express.Router();

routes.get("/", (req, res)=>{
    res.send("<h1>contact  </h1>");
})

routes.get("/demo", (req, res) => {
    res.send("<h1>contact ----> demo </h1>");
})

module.exports = routes;