// 2, 3, 5, 7, 

var a = 91;
var x = true;
for(var i=2; i < a/2; i++)
{
    if(a % i == 0)
    {
        x = false;
        break;
    }
}
if(x == true)
{
    console.log("this number is Prime");
}
else{
    console.log("this is not a Prime Number");
}
/*
var a = 2;
*/


