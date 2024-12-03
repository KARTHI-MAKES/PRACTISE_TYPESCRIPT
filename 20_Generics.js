"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generic(a, b) {
    console.log(a);
    console.log(b);
}
generic(7, 8);
var sample1 = {
    name: "KARTHI",
    age: 22,
    mail: "k@gmail.com",
    phoneNo: 986472892133
};
function gen(sample1) {
    return sample1;
}
console.log(gen(sample1));
// generic with class
var c1 = /** @class */ (function () {
    function c1(n, s, g, c) {
        this.name = n;
        this.skill = s;
        this.goal = g;
        this.celebration = c;
    }
    c1.prototype.method = function (c1) {
        console.log(c1);
    };
    return c1;
}());
var c2 = new c1("RONALDO", "KNUCKLE-KICK", 800, "SIUU");
c2.method(c2);
