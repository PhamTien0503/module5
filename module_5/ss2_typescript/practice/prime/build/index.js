"use strict";
// happy coding 👻
console.log("hello world");
let arr;
let count = 0;
let n = 2;
while (count <= 30) {
    let check = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
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
