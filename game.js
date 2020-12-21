const rls = require('readline-sync')

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * @returns {undefined}
 */
const startGame = () => {
// prompt if they want to play
//if yes
//console.log lets start
//call gameloop()
//else
// call guitGame()
console.log("Welcome")

let answer = rls.keyInYN("Ready")
if (answer ){
console.log("Let's start!")
gameLoop()
}
else {
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
console.log("You have 10 guesses total")
 let numOfGuesses = 10
 const randomNumber = generateRandomNumber()
 console.log('rand: ' + randomNumber)
 //** loop start
while(numOfGuesses > 0){
 let guess = rls.questionInt('Guess a number: ')
 if ( guess === randomNumber){
console.log('you win!!!!!')
rls.keyInYN('Want to play again?') ? gameLoop() : quitGame()
 }
 else if ( guess < randomNumber){
console.log('too low')
 }
 else {
   console.log('too high')
 }
 console.log('You have ' + (numOfGuesses - 1) + ' remaining')
 numOfGuesses--
}
console.log('You ran out of guesses')
quitGame()

}


/***
 * Generates a random number 
 *
 * @returns {number} - a number between 1 and 1000
 */
const generateRandomNumber = () => {
  let random = Math.ceil(Math.random() * 1000)
  return random
}

startGame()

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}