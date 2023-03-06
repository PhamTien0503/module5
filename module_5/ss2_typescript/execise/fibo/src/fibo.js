function fibonacci(n) {
    if ((n == 1) || (n == 2))
        return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
var sum = 0;
for (var i = 1; i <= 10; i++) {
    console.log('So fibonanci thu ' + i + ' la: ' + fibonacci(i));
    sum += fibonacci(i);
}
console.log('Tong 10 so fibonance dau tien la: ' + sum);
