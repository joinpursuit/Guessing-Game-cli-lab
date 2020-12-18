const rls = require('readline-sync')

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * @returns {undefined}
 */
const startGame = () => {

  console.log("Welcome!")
//prompt user 
//if yes
//call gameLoop()
//else
//call quitGame()
let answer = rls.keyInYN("Ready?")
if(answer){
  console.log("Let's start!")
  gameLoop()
}
else{
  console.log("Have a nice life!")
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
  console.log("You have 10 guesses")
}


/***
 * Generates a random number 
 *
 * @returns {number} - a number between 1 and 1000
 */
const generateRandomNumber = () => {
  Math.round(Math.random() * 1000)

}

startGame()

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}