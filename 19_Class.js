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
var animals = /** @class */ (function () {
    function animals(n1, n2, n3) {
        this.name1 = n1;
        this.name2 = n2;
        this.name3 = n3;
    }
    return animals;
}());
var animals1 = /** @class */ (function (_super) {
    __extends(animals1, _super);
    function animals1(n1, n2, n3, n4, n5) {
        var _this = _super.call(this, n1, n2, n3) || this;
        _this.name4 = n4;
        _this.name5 = n5;
        return _this;
    }
    return animals1;
}(animals));
var details = new animals1("PITBULL", "ROTWEILER", "GERMAN SHEPHERD", "LABRADOR", "HUSKIE");
console.log(details.name3);
console.log(details.name5);
