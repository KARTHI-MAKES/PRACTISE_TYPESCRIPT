var superhero;
(function (superhero) {
    var DC = /** @class */ (function () {
        function DC(h1, h2, h3) {
            this.h1 = h1;
            this.h2 = h2;
            this.h3 = h3;
            //    this.hero1=h1;
            //    this.hero2=h2;
            //    this.hero3=h3
        }
        DC.prototype.method = function () {
            console.log("HERO1:".concat(this.h1));
            console.log("HERO2:".concat(this.h2));
            console.log("HERO3:".concat(this.h3));
        };
        return DC;
    }());
    superhero.DC = DC;
})(superhero || (superhero = {}));
