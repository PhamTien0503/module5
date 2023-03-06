// happy coding 👻
console.log("hello world");
var arr;
var count = 0;
var n = 2;
while (count <= 30) {
    var check = true;
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            check = false;
            break;
        }
    }
    if (check) {
        console.log(n);
        count++;
    }
    n++;
}
