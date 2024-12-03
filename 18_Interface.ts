interface employeeDetails{
    name:string,
    company:string,
    age:number,
    isEmployeed:boolean
}

const details:employeeDetails1 ={
       name:"KARTHI",
       company:"MNK",
       age:23,
       isEmployeed:true,
       experience:1,
       role:"FRONT END DEVELOPER"

}

interface employeeDetails1 extends employeeDetails{
      experience:number,
      role:string
}

console.log(details.name)
console.log(details.experience)
console.log(details.role)