var express = require("express");
var app = express();


// the "listen()" is used for create a virtual server with domain name "localhost"
app.listen(3000, () => {
    console.log("server running");
});
// the listen function accapt 2 para, first one is "port number" and second one is "call back function"


/*
function listen(a, b){

}
*/