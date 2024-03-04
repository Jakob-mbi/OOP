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
    static validateWinnerInUi(players,uiFunc){
        let classes = "text-capitalize fs-3 fw-bold"
        const participants = players;
        let theWinnerIs = participants[0];
        participants.forEach(player=>{
        let classes = "text-capitalize fs-3 fw-bold"
            uiFunc(player.name+" total card value is "+player.totalValue)
            if(theWinnerIs.totalValue<player.totalValue)
            {
                theWinnerIs=player;
            }
        })
        uiFunc("The winner is "+theWinnerIs.name,classes)
    }
    static validateNumberOfPLayers(number)
    {
        if(isNaN(number)) throw "You did not enter a number";

        if(number<2) throw "You need minimum 2 players";

        if(number>5) throw "You can maximum have 5 players";
    }
    static existensOfUi(id)
    {
        if(document.querySelector(`#${id}`)==null) throw "Ui does not exist"
    }
    static valueExist(index,arr)
    {
        if(typeof arr[index] == "undefined") throw "That card does not exist"
    }


}



export default Validation;