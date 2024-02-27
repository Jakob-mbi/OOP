import Ui from './gameUi';
import Player from './player'
import Dealer from './dealer'
import Validation from './validation'

class Game{
    constructor(){
        this.players =[];
        this.dealer = new Dealer("Dealer");
    }

    startGame(){
        try{
            Ui.startingUi()
            let index = 0
            document.querySelector("#Continue").addEventListener("click",()=>{
                switch(index) {
                    case 0:
                        this.addPlayers()
                        index++
                      break;
                    case 1:
                        this.dealerDealInitialCards(5)
                        index++
                      break;
                    default:
                        Validation.validateWinnerInUi(this.players,Ui.uiConsoleText)
                }
            })
        }
        catch(err)
        {
            console.error(err)
        }

    }


    addPlayers(){
        const numberOfPlayers = prompt("Please enter number of players, 2 to 5");
        Validation.validateNumberOfPLayers(numberOfPlayers)
        for(let i = 1; i <= numberOfPlayers;i++)
        {
            const newPlayer = new Player(prompt("Please enter a name for player "+i))
            this.players.push(newPlayer)
        }
    }

    dealerDealInitialCards(numberOfCards)
    {
        let classes = "text-capitalize fs-3 fw-bold"
        this.players.forEach(player => {
            Ui.uiConsoleText("Cards Dealt to "+player.name,classes)
            for(let i = 0; i < numberOfCards; i++)
            {
                player.reciveCard(this.dealer.dealCard())
            }
            let cards = player.hand.map(card=> Ui.uiConsoleText(`${player.hand.indexOf(card)}: ${card.color} ${card.name}`))
        
        })
    }  

}

export default Game