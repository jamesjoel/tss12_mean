var express = require("express");
var routes = express.Router();

routes.get("/", (req, res)=>{
    res.send("<h1>user </h1>");
})

routes.get("/profile", (req, res) => {
    res.send("<h1>user ----> profile </h1>");
})

routes.get("/profile/changeprofile", (req, res) => {
    res.send("<h1>user ----> profile -----> changeprofile </h1>");
})

routes.get("/myaccount", (req, res) => {
    res.send("<h1>user ----> myaccount </h1>");
})

module.exports = routes;