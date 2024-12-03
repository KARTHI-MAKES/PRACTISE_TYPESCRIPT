var sportsman;
(function (sportsman) {
    sportsman[sportsman["Ronaldo"] = 0] = "Ronaldo";
    sportsman[sportsman["Dhoni"] = 1] = "Dhoni";
    sportsman[sportsman["Virat_Kohli"] = 2] = "Virat_Kohli";
    sportsman[sportsman["Sergio_Ramos"] = 3] = "Sergio_Ramos";
})(sportsman || (sportsman = {}));
var actions = sportsman.Ronaldo;
function result() {
    switch (actions) {
        case sportsman.Ronaldo:
            console.log("SUIIII");
            break;
        case sportsman.Dhoni:
            console.log("THALA");
            break;
        case sportsman.Virat_Kohli:
            console.log("KING");
            break;
        case sportsman.Sergio_Ramos:
            console.log("KING OF DEFENCE");
            break;
        default:
            console.log("NOTHING");
    }
}
result();
