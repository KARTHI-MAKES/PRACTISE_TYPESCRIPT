"use strict";
// polymorphism allow us to create same  method in a class with different implementation
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var circle = /** @class */ (function () {
    function circle(radius) {
        this.radius = radius;
    }
    circle.prototype.fun = function () {
        return Math.floor(Math.PI * this.radius);
    };
    return circle;
}());
var rectangle = /** @class */ (function () {
    function rectangle(height, width) {
        this.height = height;
        this.width = width;
    }
    rectangle.prototype.fun = function () {
        return this.height * this.width;
    };
    return rectangle;
}());
var triangle = /** @class */ (function () {
    function triangle(base, height) {
        this.base = base;
        this.height = height;
    }
    triangle.prototype.fun = function () {
        return 0.5 * this.base * this.height;
    };
    return triangle;
}());
var result = [new circle(2), new rectangle(10, 20), new triangle(11, 2)];
result.forEach(function (r) {
    console.log(r.fun());
});
// Function OverRiding
var animals = /** @class */ (function () {
    function animals() {
    }
    animals.prototype.makeSound = function () {
        console.log("SOME GENERIC SOUND");
    };
    return animals;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("BARK");
    };
    return Dog;
}(animals));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.makeSound = function () {
        console.log("MEOW");
    };
    return Cat;
}(animals));
var Cow = /** @class */ (function (_super) {
    __extends(Cow, _super);
    function Cow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cow.prototype.makeSound = function () {
        console.log("MMAHHHHH");
    };
    return Cow;
}(animals));
var sound = [new Cat, new Dog];
sound.forEach(function (s) {
    s.makeSound();
});
//Function Overloading
var overload = /** @class */ (function () {
    function overload(name) {
    }
    overload.prototype.fun = function (name) {
        if (Array.isArray(name)) {
            return "hello".concat(name.join(','));
        }
        else {
            return "Hello".concat(name);
        }
    };
    return overload;
}());
var lol = new overload("KARTHI");
// console.log(lol.fun(["KARTHI","ronaldo"]))
var lol1 = new overload(["KARTHIronaldo"]);
console.log(lol1.fun(["KARTHI,ronaldo"]));
console.log(lol.fun("KARTHI"));
