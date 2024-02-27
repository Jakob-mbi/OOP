import Deck from './deck'
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
            
            this.addPlayers();
            this.dealerDealInitialCards(5);
            Validation.validateWinner(this.players)
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
        this.players.forEach(player => {
            for(let i = 0; i < numberOfCards; i++)
            {
                player.reciveCard(this.dealer.dealCard())
            }
        })
    }

}

export default Game