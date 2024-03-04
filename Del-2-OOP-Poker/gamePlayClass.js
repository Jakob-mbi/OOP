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
            const rounds = prompt("Hur många rundor vill du spela?")
            this.addPlayers()

            const btn = document.querySelector("#Continue")
            const btnRestart = document.querySelector("#restart")
            const uiConsole = document.querySelector("#console")

            let numberofGamesPlayd= 0
            let index = 0

            btn.addEventListener("click",()=>{
                btn.innerHTML="Continue"
                switch(index) {
                    case 0:
                        this.dealerDealInitialCards(5)
                        index++
                    break;
                    case 1:
                        this.throwCards()
                        this.showNewCards()
                        index++
                        break;
                    
                    case 2:
                        Validation.validateWinnerInUi(this.players,Ui.uiConsoleText)
                        index++
                        break;
                    default:
                        numberofGamesPlayd++
                        index++

                }
                if(index > 3 && numberofGamesPlayd < rounds)
                {
                    index=0
                    uiConsole.innerHTML="";
                    this.dealer.startDeckOver();
                    this.players.forEach(player=>player.emptyHand())
                }
            })
            
            btnRestart.addEventListener("click",function(){
                location.reload();
            })
           
                    
    
        }
        catch(err)
        {
            console.error(err)
        }

    }
    throwCards(){
        this.players.forEach(player=>{
            try{
                let throwCards = []
                throwCards[0] = prompt(player.name+" please choose the first card position number you whant to exchange");
                throwCards[1] = prompt(player.name+" please choose the second card position number you whant to exchange");
                throwCards.forEach(cardIndex=>{Validation.valueExist(cardIndex,player.hand)})
                player.hand.splice(Number(throwCards[0]),1)
                player.hand.splice(Number(throwCards[1]),1)
                player.reciveCard(this.dealer.dealCard())
                player.reciveCard(this.dealer.dealCard())
            }
            catch(err)
            {
                console.error(err)
            }
 
        })
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
    showNewCards(){
        let classes = "text-capitalize fs-3 fw-bold"
        this.players.forEach(player => {
            Ui.uiConsoleText(player.name+" new hand",classes)
            let cards = player.hand.map(card=> Ui.uiConsoleText(`${player.hand.indexOf(card)}: ${card.color} ${card.name}`))
        
        })
    } 

}

export default Game