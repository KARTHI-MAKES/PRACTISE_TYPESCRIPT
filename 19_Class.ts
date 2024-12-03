class animals{
    name1:string;
    name2:string;
    name3:string

    constructor(n1:string,n2:string,n3:string){
        this.name1=n1;
        this.name2=n2;
        this.name3=n3
    }
}

class animals1 extends animals{
    name4: string;
    name5: string;
    constructor(n1:string,n2:string,n3:string,n4:string,n5:string){
        super(n1,n2,n3)
        this.name4=n4;
        this.name5=n5
    }
}

const details:animals1= new animals1("PITBULL","ROTWEILER","GERMAN SHEPHERD","LABRADOR","HUSKIE")
console.log(details.name3)
console.log(details.name5)