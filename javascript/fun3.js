// think--price, a (5), b(8), c(18)
function gst(price, type)
{
    switch(type)
    {
        case "a" : var ans = price*5/100;
                break;

        case "b" : var ans = price*8/100;
                break;

        case "c" : var ans = price*18/100;
                break;
    }
    console.log("Your GST amount is ", ans+price);
}
gst(35000, "c");
gst(2300, "a");
gst(1200, "b");

// gst("a", 5000);
