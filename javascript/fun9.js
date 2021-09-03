var obj = { 
        a : "rohit", 
        b : 100, 
        c : function(){
            return {
                name : "james",
                age : 25,
                city : "indore",
                demo : function(){
                    console.log("----------");
                }
            };
        } 
};

var x = obj.c();
x.demo();











