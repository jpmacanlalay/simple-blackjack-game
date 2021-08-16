//player Object
let player = {
  name: "JP",
  chips: 200
}
//stores the value globally
//get the value and store it when the game start
let cards = []
let sum = 0

//boolean
let hasBlackJack = false
let isAlive = false

//stores data message
let message = ""

//msg id
let msgEl = document.getElementById("message")
//card id
let cardsEl = document.getElementById("cards")
//sum id
let sumEl = document.querySelector("#sum")
//player id
let playerEl = document.querySelector("#player")


//************starting game
function startBtn(){
//cards
 firstCard = getRandomCard()
 secondCard = getRandomCard()
 cards = [firstCard, secondCard]
 sum = cards[0] + cards[1]
 isAlive = true
 
//render playerEl
playerEl.textContent = player.name + ": $ " + player.chips

//call renderGame()
 renderGame()//nested function
}


//************Generate random cards
function getRandomCard(){
  //create random numbers
 let randomNumbers = Math.floor(Math.random()*13) + 1
  //return Math.floor(Math.random()*13)+1
  
  //if 1 = 11
  //if 11-13 = 10
  if(randomNumbers===1){ 
    return 11
  }
  else if(randomNumbers>10){ //ex. 11>10? T, return 10
    return 10
}
  else{
    return randomNumbers
  }
}


//************draw and render a new card
function renderGame(){
//display cards
cardsEl.textContent = "Cards: "

//loop the cards
for(i=0;i<cards.length;i++){
  
//+= => holds data. //logs out the cards
  cardsEl.textContent += cards[i] + " "//gives space""
}

//display sum
sumEl.textContent = "Sum: " + sum


if(sum<=20){
  message = "Do you want to draw a new card?"
}
else if(sum===21){
  message = " Woohoo! You've got BlackJack! You win! 🥳"
  hasBlackJack = true
}
else{
  message = "You're out of the game 😭"
  isAlive = false
  }

//display message
msgEl.textContent = message
}


//************new card 
function newCardBtn(){
//draw newCard if isAlive or notBlackJack
if(isAlive === true && hasBlackJack === false){

let newCard = getRandomCard()

//sum the new card to the previous cards
sum += newCard

//add new card in Array
cards.push(newCard)

//call renderGame() function
renderGame()
}
}