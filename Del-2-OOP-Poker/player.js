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
        this.calculateTotalValue();
    }
    
    reciveCard(card){
        if(card != undefined)
        {
            this.hand.push(card);
            this.calculateTotalValue();
        }
    }

    calculateTotalValue(){
        let holding = this.hand
        this.totalValue = holding.reduce((total,card)=>{
           return total + card.value
        },0);
    }

    throwCard(){
        let lowstValueCard = this.hand[0];
        let index = 0;
        for(let i = 0; i<this.hand.length;i++)
        {
            if(this.hand[i].value<lowstValueCard.value)
            {
                lowstValueCard = this.hand[i];
                index = i;
            }
        }
        return this.hand.splice(index,1);
    }

    emptyHand(){
        this.hand=[];
        this.calculateTotalValue();
    }
}

export default Player
