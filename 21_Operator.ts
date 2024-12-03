enum operator{
    ADDITION,
    SUBTRACTION,
    MULTIPLICATION,
    DIVISION
}

let alloperator:operator = operator.MULTIPLICATION;
 function operation(){
let n1:number=2;
let n2:number=5;
switch(alloperator){
   case operator.ADDITION:
    console.log(n1+n2);
    break;
   case operator.SUBTRACTION:
        console.log(n2-n1);
        break;
    case operator.MULTIPLICATION:
        console.log(n1*n2);
        break;
   case operator.DIVISION:
        console.log(n2/n1);
        break;
   default:
      console.log("NOTHING THERE IDS DO WITH OPERATION")
   }
}
operation()