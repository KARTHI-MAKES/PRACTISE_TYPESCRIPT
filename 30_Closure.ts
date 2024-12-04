//CLOSURE is method or way that allow u to access the properties and method in lexical environment

function add(...a){
     let c:string="Hello"
    function sub(){
      return a+","+c
      }
    return sub()
}

let answer = console.log(add(1,2))