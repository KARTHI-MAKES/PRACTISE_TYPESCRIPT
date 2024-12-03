enum sportsman{
    Ronaldo,
    Dhoni,
    Virat_Kohli,
    Sergio_Ramos
}

let actions = sportsman.Ronaldo;
function result (){
       switch(actions){
        case sportsman.Ronaldo:
            console.log("SUIIII")
            break;
        case sportsman.Dhoni:
            console.log("THALA")
            break;
        case sportsman.Virat_Kohli:
            console.log("KING")
            break;
        case sportsman.Sergio_Ramos:
            console.log("KING OF DEFENCE");
            break;
            default:
                console.log("NOTHING")
            
       }
}
result()

