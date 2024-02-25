const VALUE_MAP = new Map()
VALUE_MAP.set('Ace', 1)
VALUE_MAP.set('Jack', 11)
VALUE_MAP.set('Queen', 12)
VALUE_MAP.set('King', 13)

class Player{
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.totalValue = 0;
    }
    
    reciveCard(card){
        this.hand.push(card)
    }

    calculateTotalValue(){
        let holding = this.hand
        this.totalValue = holding.reduce((total,card)=>{
           return total + card.value
        },0)
    }

    throwCard(){
        return this.hand.pop()
    }
}

export default Player
