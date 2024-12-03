// if u are using never its never return or console there should be not an end point in function
function string(a1) {
    if (a1 === "KARTHICK") {
        throw new Error("IT IS A STRING");
    }
    else {
        throw new Error("IT NOT A STRING");
    }
}
string("HELLO");
