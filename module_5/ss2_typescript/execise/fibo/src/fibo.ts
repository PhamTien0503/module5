function fibonacci (n:number): number {
    if ((n == 1) || (n == 2))
        return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}
let sum:number=0;
for (let i=1;i<=10;i++){
    console.log('So fibonanci thu '+i+ ' la: '+fibonacci(i));
    sum+=fibonacci(i);
}
console.log('Tong 10 so fibonance dau tien la: '+sum);
