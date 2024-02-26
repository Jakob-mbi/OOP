import './style.css'
import Deck from './deck'
import Player from './player'
import Dealer from './dealer'
import Validation from './validation'

//del 1

let firtDeck = new Deck
let Slim = new Player("Slim")
let Luke = new Player("Luke")

console.log(firtDeck.deck)

//del 2
console.log(Slim)
console.log(Luke)

for(let i =0;i<5;i++)
{
  Slim.reciveCard(firtDeck.deal())
  Luke.reciveCard(firtDeck.deal())
}

console.log(firtDeck.deck)


console.log(Slim)
console.log(Luke)

//del 3
for(let i =0;i<2;i++)
{
  firtDeck.reciveThrowCard(Slim.throwCard())
  firtDeck.reciveThrowCard(Luke.throwCard())
  Slim.reciveCard(firtDeck.deal())
  Luke.reciveCard(firtDeck.deal())
}
console.log(firtDeck.deck)
console.log(Slim)
console.log(Luke)
console.log(firtDeck.throwPile)

//del 4
Slim.emptyHand()
Luke.emptyHand()
firtDeck.emptyThrowPile()
console.log(firtDeck.deck)
console.log(Slim)
console.log(Luke)

firtDeck.deck=[]

Slim.reciveCard(firtDeck.deal())
Luke.reciveCard(firtDeck.deal())
console.log(Slim)
console.log(Luke)

//del 5 
console.log("Start of part 5")
let Slim2 = new Player("Slim")
let Luke2 = new Player("Luke")
let dealer = new Dealer("dealer")

for(let i =0;i<5;i++)
{
  Slim2.reciveCard(dealer.dealCard())
  Luke2.reciveCard(dealer.dealCard())
}

console.log(Slim2.hand)
console.log(Luke2.hand)

Validation.validateWinner(Slim2,Luke2)




