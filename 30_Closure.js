//CLOSURE is method or way that allow u to access the properties and method in lexical environment
function add() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var c = "Hello";
    function sub() {
        return a + "," + c;
    }
    return sub();
}
var answer = console.log(add(1, 2));
