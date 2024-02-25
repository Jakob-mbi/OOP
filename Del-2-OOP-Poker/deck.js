import Card from "./card";

const VALUE_MAP = new Map()
VALUE_MAP.set('Ace', 1)
VALUE_MAP.set('Jack', 11)
VALUE_MAP.set('Queen', 12)
VALUE_MAP.set('King', 13)


class Deck {
    constructor() {
    this.deck = [];
    this.throwPile = [];
    this.reset(); //Add 52 cards to the deck
    this.shuffle(); //Shuffle the deck

  }
  
  
  reset() {
    this.deck = [];
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
    for (let suit in suits) {
      for (let value in values) {
        if(suits.indexOf(suits[suit])<2)
        {
           
            let card = new Card('red',`${values[value]} of ${suits[suit]}`,typeof values[value]=="string"? VALUE_MAP.get(values[value]):values[value])
            this.deck.push(card);
        }
        else
        {
            let card = new Card('black',`${values[value]} of ${suits[suit]}`,typeof values[value]=="string"? VALUE_MAP.get(values[value]):values[value])
            this.deck.push(card);
        }
      }
    }
  } 
  
  
  shuffle() {
    let numberOfCards = this.deck.length;  
    for (var i=0; i<numberOfCards; i++) {
      let j = Math.floor(Math.random() * numberOfCards);
      let tmp = this.deck[i];
      this.deck[i] = this.deck[j];
      this.deck[j] = tmp;
    }
  } 
  
  deal(){
    try{
      if(this.isEmpty()) throw "Deck is empty";
      
      return this.deck.pop();
    }
    catch(err)
    {

      console.error(err)
    }
  } 

  reciveThrowCard(card){
    this.throwPile.push(card)
    
  }

  emptyThrowPile(){
    this.reset()
    this.shuffle();
    this.throwPile = [];
  }

  isEmpty() {
    return (this.deck.length==0);
  } //End of isEmpty()
  
  length() {
    return this.deck.length;
  }
  
} 

export default Deck