// number you need to describe the type number and it will allow you only number state to use
var Number1 = 100;
var sum = 0;
while (Number1 > 0) {
    var rem = Number1 % 10;
    sum = sum + rem;
    Number1 = Math.floor(Number1 / 10);
}
console.log(sum);
