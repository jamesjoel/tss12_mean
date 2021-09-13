var express = require("express");
var routes = express.Router();

routes.get("/", (req, res)=>{
    var emp = [
        {
            name : "rohit",
            age : 25,
            city : "indore",
            salary : 5000
        },
        {
            name: "nilesh",
            age: 20,
            city: "pune",
            salary: 7000
        },
        {
            name: "amar",
            age: 21,
            city: "indore",
            salary: 5500
        },
        {
            name: "jaya",
            age: 30,
            city: "mumbai",
            salary: 7800
        },
        {
            name: "nidhi",
            age: 34,
            city: "delhi",
            salary: 8000
        }
    ];
    var pagedata = { emp : emp };
    res.render("employee/index", pagedata);
})

module.exports = routes;