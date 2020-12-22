const readlineSync = require('readline-sync')

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * @returns {undefined}
 */

const startGame = () => {

const play = readlineSync.question("Do you want to play? \n") 
console.log("Let's start!")

if (play === true) 
gameLoop()
else
console.log('Have a nice life!')

quitGame()

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

const playagain = readlineSync.question('Whould you like to play again?')
console.log('Would you like to play again?')

if (playagain === true)

gameLoop ()

}


/***
 * Generates a random number 
 *
 * @returns {number} - a number between 1 and 1000
 */
const generateRandomNumber = () => {

let bottom = 1

let top = 1000

Console.log('The number is ' + RandomNumber)

startGame()

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}