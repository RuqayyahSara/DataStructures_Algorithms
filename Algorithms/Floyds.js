const readLineSync = require("readline-sync");
var n = Number(readLineSync.question("Enter number of rows: "));
function Floyds(n) {
    var l = 1;
    for (var i = 1; i <= n; i++) {
        var str = "";
        for (var j = 1; j <= i; j++ , l++) {
            str += l + " ";
        }
        console.log(str);
    }
}
Floyds(n);