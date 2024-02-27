import Player from "./player";

class Validation{
    constructor() {
    }

    static validateWinner(players){
        const participants = players;
        let theWinnerIs = participants[0];
        participants.forEach(player=>{
            console.log(player.name+" total card value is "+player.totalValue)
            if(theWinnerIs.totalValue<player.totalValue)
            {
                theWinnerIs=player;
            }
        })
        console.log("The winner is "+theWinnerIs.name)
    }
    static validateNumberOfPLayers(number)
    {
        if(isNaN(number)) throw "You did not enter a number";

        if(number<2) throw "You need minimum 2 players";

        if(number>5) throw "You can maximum have 5 players";
    }

}



export default Validation;