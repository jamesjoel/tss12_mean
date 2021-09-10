var express = require("express");
var app = express();

var routes = require("./config/routes"); // "./config/routes" this is a file name/path.
//  "routes" is a var name, can change also

app.use(express.static(__dirname+"/assets"));
app.set("view engine", "ejs");
app.use(routes);


app.listen(3000, ()=>{
    console.log("server running");
})
