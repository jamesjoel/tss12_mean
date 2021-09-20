var express= require("express");
var app= express();

var routes = require("./config/routes");
app.use(express.static(__dirname+"/assets/"));
app.set("view engine","ejs");



app.use(express.json());
app.use(express.urlencoded());
app.use(routes);

app.listen(3000,()=>{
    console.log("all is well");
});