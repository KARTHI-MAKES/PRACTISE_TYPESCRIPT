//union is used to assign multiple types
var array = [2, "heelo", true];
console.log(array.filter(function (a) {
    return a !== 2 && a !== "heelo";
}));
