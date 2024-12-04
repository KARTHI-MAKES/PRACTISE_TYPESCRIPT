// export{}
console.log(welcome); //this is hoisting u cant do console first before initalization
var welcome = "HELLO";
console.log(welcome); // GLOBAL SCOPE VARIABLE
function hoist() {
    var name = "KARTHI";
    console.log(name); // you can not call the const name variable outside the function because its a function scope
    console.log(welcome); // you can call the welcome variable inside the  function because its a global variable
}
hoist();
//BLOCK SCOPE 
var man2 = "GENTLEMAN2";
if (true) {
    var man = "HE IS A GENTLE MAN";
    console.log(man);
    console.log(man2); //THIS IS GLOBAL SCOPE
}
// console.log(man) THIS IS A BLOCK SCOPE YOU CANT CONSOLE OUTSIDE THE BLOCK
console.log(man2); //THIS IS GLOBAL SCOPE
