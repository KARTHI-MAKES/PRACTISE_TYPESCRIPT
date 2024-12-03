//union is used to assign multiple types
var array:(number|string|boolean)[]=[2,"heelo",true];
console.log(array.filter((a)=>
    a!==2 && a!=="heelo"
)) 