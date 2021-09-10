var express = require("express");
var app = express();

// when any routes hit, then every time app.use() hit or call
app.use(()=>{
    console.log("welcome");
});


app.get("/about", (req, res)=>{
    
    res.send("<h1>About</h1>");
})
app.get("/contact", (req, res) => {
    
    res.send("<h1>contact</h1>");
})
app.get("/help", (req, res) => {
    
    res.send("<h1>help</h1>");
})
app.get("/", (req, res) => {
    
    res.send("<h1>home</h1>");
})






app.listen(3000, ()=>{
    console.log("server running");
})