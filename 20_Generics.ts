export{}
function generic<T,U>(a:T,b:U):void{
    console.log(a)
    console.log(b)
}
generic(7,8)

//Generic with interface

interface sample{
    name:string
    age:number
    mail:string
    phoneNo:number
}

const sample1 :sample ={
   name:"KARTHI",
   age:22,
   mail:"k@gmail.com",
   phoneNo:986472892133
}

function gen<M extends sample>(sample1:M):M{
    return sample1
}
console.log(gen(sample1))

// generic with class
class c1{
    name:string
    skill:string
    goal:number
    celebration:string

    constructor(n:string,s:string,g:number,c:string){
         this.name=n;
         this.skill=s;
         this.goal=g;
         this.celebration=c
    }

    method<T extends c1>(c1:T):void{
          console.log(c1)
    }
}

const c2:c1 = new c1("RONALDO","KNUCKLE-KICK",800,"SIUU")
c2.method(c2)
  