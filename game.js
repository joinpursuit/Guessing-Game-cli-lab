const rls = require('readline-sync')

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * @returns {undefined}
 */
const startGame = () => {
console.log(" Welcome!")
let answer = rls.keyInYN("Ready!")
if (answer){
  console.log("Let's start!")
  gameLoop()
}else {
  console.log("Have a nice life!" )
  quitGame()
 }
}

/**
 * Logs "Goodbye!"
 * Calls process.exit() to quit the game
 * 
 * @returns {undefined}
 */
const quitGame = () => {
  console.log("Goodbye!")
  process.exit()

}

/**
 * Controls the flow of the game.
 * Should prompt the user to play again once all
 * guesses have been made or correct answer guessed
 * 
 * @returns {undefined}
 */
const gameLoop = () => {
console.log("I have a random number in mind")
console.log("It's between 1 and 1000")
console.log("You have 10 guesses total")

let user = rls.keyInYN("Do you wannt to play again!\n")
  if(user){
    console.log('Play')
  }else{
    console.log('Bye')
    quitGame()
  }
   
    
let generateRandomNumber = Math.random()
let answer = rls.questionInt(" Pick a number! \n")

for (let answer = 1; answer <= generateRandomNumber; answer+1){
  console.log("Congrats! You got it right!" )
 } if (((answer %2) ==0) <= generateRandomNumber) {
     console.log("Your guess is too high" )
  } else if(((answer %2) ==1)>= generateRandomNumber){
       console.log("Your guess is too low")
    } else if(((answer %2) ==0)=== generateRandomNumber){
         console.log("Congrats! You got it right!")
        } else {
            console.log(user)
            quitGame()
          }


}



/***
 * Generates a random number 
 *
 * @returns {number} - a number between 1 and 1000
 */
const generateRandomNumber = () => {
  return Math.round(Math.random()*1000)

}

startGame()

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}