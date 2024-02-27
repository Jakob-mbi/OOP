import Deck from './deck'
import Player from './player'
import Validation from './validation'


let firtDeck = new Deck
let Slim = new Player("Slim")
let Luke = new Player("Luke")

function gamePLay(){
    const button = document.querySelector("button")
    const gamePlay = [part2,part3,part4]
    let index = 0;
    console.log("please press the button to start the game")
    //del 1
    console.log(firtDeck.deck)
    button.addEventListener("click",()=>{
        console.clear()
        gamePlay[index]();
        index++;
    })
}

function part2(){
  
  //del 2

  console.log("First player "+Slim.name)
  console.log("Second player "+Luke.name)

  for(let i =0;i<5;i++)
  {
    Slim.reciveCard(firtDeck.deal())
    Luke.reciveCard(firtDeck.deal())
  }

  console.log(firtDeck.deck)
  console.log(Slim.name+" total value:"+Slim.totalValue)
  console.log(Slim.hand)
  console.log(Luke.name+" total value:"+Luke.totalValue)
  console.log(Luke.hand)
  console.log("please press the button to continue")
}

function part3(){
  //del 3
  for(let i =0;i<2;i++)
  {
    Slim.throwCard()
    Luke.throwCard()
    Slim.reciveCard(firtDeck.deal())
    Luke.reciveCard(firtDeck.deal())
  }
  console.log(firtDeck.deck)
  console.log(Slim.name+" total value:"+Slim.totalValue)
  console.log(Slim.hand)
  console.log(Luke.name+" total value:"+Luke.totalValue)
  console.log(Luke.hand)
  Validation.validateWinner([Slim,Luke])
  console.log("please press the button to continue")
}

function part4(){
  //del 4
  Slim.emptyHand()
  Luke.emptyHand()
  firtDeck.reset()
  firtDeck.shuffle()
  console.log(firtDeck.deck)
  console.log(Slim.name+" have "+Slim.hand.length+" Cards")
  console.log(Luke.name+" have "+Luke.hand.length+" Cards")
  console.log("End of gameplay part 1 to 4")
}

export default gamePLay