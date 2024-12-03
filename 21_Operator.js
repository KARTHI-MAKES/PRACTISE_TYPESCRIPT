var operator;
(function (operator) {
    operator[operator["ADDITION"] = 0] = "ADDITION";
    operator[operator["SUBTRACTION"] = 1] = "SUBTRACTION";
    operator[operator["MULTIPLICATION"] = 2] = "MULTIPLICATION";
    operator[operator["DIVISION"] = 3] = "DIVISION";
})(operator || (operator = {}));
var alloperator = operator.MULTIPLICATION;
function operation() {
    var n1 = 2;
    var n2 = 5;
    switch (alloperator) {
        case operator.ADDITION:
            console.log(n1 + n2);
            break;
        case operator.SUBTRACTION:
            console.log(n2 - n1);
            break;
        case operator.MULTIPLICATION:
            console.log(n1 * n2);
            break;
        case operator.DIVISION:
            console.log(n2 / n1);
            break;
        default:
            console.log("NOTHING THERE IDS DO WITH OPERATION");
    }
}
operation();
