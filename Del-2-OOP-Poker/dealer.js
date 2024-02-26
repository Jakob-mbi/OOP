import Deck from "./deck";

class Dealer{
    constructor(name) {
        this.name = name;
        this.deck = new Deck()
    }

    dealCard(){
        return this.deck.deal();
    }

    shuffleDeck(){
        this.deck.shuffle();
    }

    startDeckOver(){
        this.deck.reset()
        this.shuffleDeck()
    }
}



export default Dealer;