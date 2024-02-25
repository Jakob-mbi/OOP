import './style.css'
import Deck from './deck'
import Player from './player'

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





