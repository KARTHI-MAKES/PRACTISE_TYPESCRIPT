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
var sport = /** @class */ (function () {
    function sport(p, s, a) {
        this.playerName = p;
        this.sportName = s;
        this.age = a;
    }
    return sport;
}());
var sport1 = /** @class */ (function (_super) {
    __extends(sport1, _super);
    function sport1(p, s, a, r, n, g) {
        var _this = _super.call(this, p, s, a) || this;
        _this.role = r;
        _this.nationality = n;
        _this, _this.goal = g;
        return _this;
    }
    return sport1;
}(sport));
var sport2 = /** @class */ (function (_super) {
    __extends(sport2, _super);
    function sport2(p, s, a, p1, s2) {
        var _this = _super.call(this, p, s, a) || this;
        _this.playerName1 = p1;
        _this.sportName1 = s2;
        return _this;
    }
    sport2.prototype.fun = function () {
        console.log("FATHER NAME:".concat(this.playerName));
        console.log("SPORT NAME:".concat(this.sportName));
        console.log("AGE:".concat(this.age));
        console.log("SON NAME:".concat(this.playerName1));
        console.log("SPORT NAME:".concat(this.sportName1));
    };
    return sport2;
}(sport));
// const SPORT:sportType1=new sport1("RONALDO","FOOTBALL",40,"ATTACKER","PORTUGAL",916)
var SPORT1 = new sport2("RONALDO", "FOOTBALL", 40, "RONALDO.JR", "FOOTBALL JUNIOR");
SPORT1.fun();
