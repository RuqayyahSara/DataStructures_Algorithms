const readLineSync = require("readline-sync");
var n = Number(readLineSync.question("Enter number of rows: ")); 

function Pascals(n){   
var cal;
for(var i=0; i<n; i++){
    var str="";
    for(var k=1; k<=n-i; k++){
        str = str + " ";
    }
 var res=[];
res.push(str);
for(var j=0; j<=i; j++){
    if (j==0 || i==0){     
         cal = 1;
         res.push(cal);
    }
        else{
        cal = cal*(i-j+1)/j;
        res.push(cal);
        }
    }
    console.log(res.join(" "));
}
}

Pascals(n);