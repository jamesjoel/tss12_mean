// -----------------forEach()
// --- the forEach() only workds on an array.

var data = ["red", "green", "blue", "yellow", "pink", "white"];
// console.log(data);
/*
data.forEach(function(x, n){
    console.log(n, "    ", x);
});
*/

var arr = [
    {
        name : "rohit",
        age : 25,
        city : "mumbai",
        fee : 2000
    },
    {
        name : "james",
        age : 22,
        city : "bhopal",
        fee : 1700
    },
    {
        name : "nidhi",
        age : 28,
        city : "pune",
        fee : 2500
    }
];
arr.forEach(function(x){
    var a = x.fee;
    if(x.age <= 25)
        var b = a * 20 / 100;
    else
       var b = a * 10 / 100;
    x.discount = b;
    console.log(x);
    // x.discount = 0;
    // console.log(x);
})