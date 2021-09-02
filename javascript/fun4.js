/*
0-100 ---- 100+20+15 = 135

101-150 ---- u*12 + 20 + 15 = 

151-200 ---- u*15 + 20 + 15 =

201-250 --- u*20 + 20 + 15 =

251 --   u*25 + 20 + 15 
*/

function bill(unit, service_charge, tax)
{

    if(unit <= 100)
    {
        var bill_amount = 100+service_charge+tax;
    }
    else if(unit >= 100 && unit <= 150)
    {
        var bill_amount = (unit*12) + service_charge + tax;
    }
    else if(unit >= 151 && unit <= 200)
    {
        var bill_amount = (unit*15) + service_charge + tax;
        
    }
    else if(unit >= 201 && unit <= 250)
    {
        var bill_amount = (unit*20) + service_charge + tax;
        
    }
    else{
        
        var bill_amount = (unit*25) + service_charge + tax;
    }
    console.log("Your Bill Amount is ", bill_amount);
}

// bill(86, 20, 15);
// bill(99, 20, 15);
// bill(122, 20, 15);
// bill(147, 20, 15);
// bill(187, 20, 15);
// bill(320, 20, 15);

// 1. Far ---- Cel
// 2. compound int. (p, r, t)
// 3. EMI - compound int. (p, r, t)


