import Player from "./player";

class Validation{
    constructor() {
    }

    static validateWinner(...players){
        const participants = [...players];
        participants.forEach(player=>{
            console.log(player.name+" total card value is "+player.totalValue)
        })
        
    }

}



export default Validation;