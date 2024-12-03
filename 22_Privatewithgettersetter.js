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
var student1 = /** @class */ (function () {
    function student1(n, c, y, arr) {
        this.name = n;
        this.class = c;
        this.year = y;
        this.arrear = arr;
    }
    Object.defineProperty(student1.prototype, "Sname", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(student1.prototype, "Fname", {
        set: function (setName) {
            this.name = setName;
        },
        enumerable: false,
        configurable: true
    });
    return student1;
}());
var student2 = /** @class */ (function (_super) {
    __extends(student2, _super);
    function student2(n, c, y, arr, f, arr1) {
        var _this = _super.call(this, n, c, y, arr) || this;
        _this.friend = f;
        _this.arrear1 = arr1;
        return _this;
    }
    Object.defineProperty(student2.prototype, "FrndNAme", {
        get: function () {
            return this.friend;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(student2.prototype, "FrndName1", {
        set: function (nam) {
            this.friend = nam;
        },
        enumerable: false,
        configurable: true
    });
    return student2;
}(student1));
var DETAILS = new student1("KARTHI", "CSE-A", 4, false);
var DETAILS2 = new student2("KARTHI", "CSE-A", 4, false, "THOMBA", false);
DETAILS.Fname = "LOL";
DETAILS2.Fname = "ITACHI";
DETAILS2.FrndName1 = "shisui";
console.log(DETAILS2);
