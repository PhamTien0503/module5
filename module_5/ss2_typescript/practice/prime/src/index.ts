// happy coding 👻
console.log("hello world");
let arr:Array<number>;
let count:number=0;
let n:number=2;
while (count<=30){
    let check:boolean=true;
    for (let i=2;i<=Math.sqrt(n);i++){
        if (n%i==0){
            check=false;
            break;
        }
    }
    if (check){
        console.log(n);
        count++
    }
    n++;
}

