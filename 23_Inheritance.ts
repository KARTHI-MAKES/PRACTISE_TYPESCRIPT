// single level inheritance // Multiple level inheritance
interface sportType{
    playerName:string
    sportName:string
    age:number
}
interface sportType1{
    role:string
    nationality:string
    goal:number
}

interface sportType2{
    playerName1:string
    sportName1:string}


class sport implements sportType{
    playerName;
    sportName;
    age;
     constructor(p:string,s:string,a:number){
       this.playerName=p;
       this.sportName=s;
       this.age=a;
     }
}
class sport1 extends sport implements sportType{
    role;
    nationality;
    goal;
    constructor(p:string,s:string,a:number,r:string,n:string,g:number){
          super(p,s,a)
          this.role=r;
          this.nationality=n;
          this,this.goal=g
    }
}

class sport2 extends sport implements sportType2{
    playerName1;
    sportName1;
    constructor(p:string,s:string,a:number,p1:string,s2:string){
        super(p,s,a)
        this.playerName1=p1;
        this.sportName1=s2

        
    }
    fun(){
        console.log(`FATHER NAME:${this.playerName}`)
        console.log(`SPORT NAME:${this.sportName}`)
        console.log(`AGE:${this.age}`)
        console.log(`SON NAME:${this.playerName1}`)
        console.log(`SPORT NAME:${this.sportName1}`)
    }
   
}

// const SPORT:sportType1=new sport1("RONALDO","FOOTBALL",40,"ATTACKER","PORTUGAL",916)
const SPORT1 =new sport2("RONALDO","FOOTBALL",40,"RONALDO.JR","FOOTBALL JUNIOR")
SPORT1.fun()
