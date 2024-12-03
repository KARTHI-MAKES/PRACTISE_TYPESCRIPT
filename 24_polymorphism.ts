// polymorphism allow us to create same  method in a class with different implementation

//1.Interface Polymorphism
export{}
interface area1{
   fun():number
}

class circle implements area1{
    constructor(private radius:number){}
          fun():number{
            return Math.floor(Math.PI*this.radius)
          }
}
class rectangle implements area1{
    constructor(private height:number,private width:number){}
          fun():number{
            return this.height* this.width
          }
        }

  class triangle implements area1{
        constructor(private base:number,private height:number){}
                  fun():number{
                    return 0.5*this.base* this.height
                  }
           }

  const result:area1[]=[new circle(2),new rectangle(10,20),new triangle(11,2)]   
  result.forEach((r)=>{
    console.log(r.fun())
  })   

  // Function OverRiding

  class animals{
    makeSound(){
        console.log("SOME GENERIC SOUND")
    }
  }

  class Dog extends animals{
        makeSound(): void {
        console.log("BARK")
    }
  }

  class Cat extends animals{
    makeSound(): void {
    console.log("MEOW")
}
}
 
class Cow extends animals{
    makeSound(): void {
    console.log("MMAHHHHH")
}
}

const sound :animals[]=[new Cat,new Dog]
sound.forEach((s)=>{
    s.makeSound()
})

//Function Overloading
class overload{
    constructor(name:string|string[]){}
    fun(name:string):string;
    fun(name:string[]):string;
    fun(name:string|string[]):string{
        if(Array.isArray(name)){
            return `hello${name.join(',')}`
        }else{
            return`Hello${name}`
        }
    }
}

const lol:overload = new overload("KARTHI")
// console.log(lol.fun(["KARTHI","ronaldo"]))
 const lol1 = new overload(["KARTHIronaldo"])
  console.log(lol1.fun(["KARTHI,ronaldo"]))
 console.log(lol.fun("KARTHI"))


