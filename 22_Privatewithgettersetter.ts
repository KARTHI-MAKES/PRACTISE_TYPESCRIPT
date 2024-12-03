class student1{
    private name:string
     class:string
     year:number
     arrear:boolean
 
   constructor(n:string,c:string,y:number,arr:boolean){
     this.name=n;
     this.class=c;
     this.year=y;
     this.arrear=arr
   }
     get Sname(){
         return this.name
     }
 
     set Fname(setName:string){
          this.name =  setName
     }
 
 } class student2 extends student1 {
     friend:string
     arrear1:boolean
 
  constructor(n:string,c:string,y:number,arr:boolean,f:string,arr1:boolean){
        super(n,c,y,arr)
        this.friend=f;
        this.arrear1=arr1
    }
 
    get FrndNAme(){
     return this.friend
    }
    set FrndName1(nam:string){
        this.friend=nam
    }
 }
 
 const DETAILS:student1 = new student1("KARTHI","CSE-A",4,false)
 const DETAILS2:student2 = new student2("KARTHI","CSE-A",4,false,"THOMBA",false)
 DETAILS.Fname="LOL";
 DETAILS2.Fname="ITACHI"
 DETAILS2.FrndName1="shisui"
 console.log(DETAILS2)