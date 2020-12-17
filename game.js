const rls = require('readline-sync')

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * @returns {undefined}
 */

 // prompt user if they want to play
 // if yes 
 // console log "Let's start!"
 // call gameLoop()
 // else 
 // call quitGame()
const startGame = () => {
  if (rls.keyInYN("Want to play a game?")){
    console.log("Let's start!")
    gameLoop()
} else {
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
  console.log('Goodbye!')
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

    let num = generateRandomNumber()
    rls.questionInt("What is your guess?")



}


/***
 * Generates a random number 
 *
 * @returns {number} - a number between 1 and 1000
 */
const generateRandomNumber = () => {

}

startGame()

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}