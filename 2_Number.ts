// number you need to describe the type number and it will allow you only number state to use

let Number1:number= 100;
let sum:number=0;
while(Number1>0){
    let rem = Number1 % 10;
     sum = sum+rem
     Number1 = Math.floor(Number1/10)
}
console.log(sum)
