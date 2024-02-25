import './style.css'
import Deck from './deck'
import Player from './player'

let firtDeck = new Deck
let Slim = new Player("Slim")
let Luke = new Player("Luke")

console.log(firtDeck.deck)

for(let i =0;i<5;i++)
{
  Slim.reciveCard(firtDeck.deal())
  Luke.reciveCard(firtDeck.deal())
}

console.log(firtDeck.deck)
Slim.calculateTotalValue()
Luke.calculateTotalValue()
console.log(Slim)
console.log(Luke)
Slim.throwCard()
console.log(Slim.hand)
console.log(Slim)


// for(let i =0;i<2;i++)
// {
//   firtDeck.reciveThrownCard(Slim.throwCard())
//   firtDeck.reciveThrownCard(Luke.throwCard())
// }

// for(let i = 0;i<2;i++)
// {
//   Slim.reciveCard(firtDeck.deal())
//   Luke.reciveCard(firtDeck.deal())
// }
// Slim.calculateTotalValue()
// Luke.calculateTotalValue()
// console.log(Slim)
// console.log(Luke)
// console.log(firtDeck.deck)





