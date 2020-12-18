const rls = require('readline-sync')

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * @returns {undefined}
 */
const startGame = () => {
  let answer = rls.keyInYN('Ready?')
  if (answer) {
    console.log("Let's start!")
    gameLoop()
  } 
  else {
    console.log('Have a nice life!')
  }

/**
 * Logs "Goodbye!"
 * Calls process.exit() to quit the game
 * 
 * @returns {undefined}
 */
const quitGame = () => {
  console.log('Goodbye!')
  process.exit()
  quitGame()
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
}


/***
 * Generates a random number 
 *
 * @returns {number} - a number between 1 and 1000
 */
const generateRandomNumber = () => {
  let number = Math.round(Math.random(1000))
 

}

startGame()
let guessCount = 10
  let bottom = 1
  let top = 1000
   while (guessCount > 0) {
     const guess = Math.floor((bottom +top) / 2)
     console.log("My guess is " + guess) 
   }
  }
  quitGame()
    


module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}