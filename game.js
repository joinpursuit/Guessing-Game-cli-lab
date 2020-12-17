const rls = require('readline-sync')

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * @returns {undefined}
 */
const startGame = () => {
let answer = rls.keyInYN("Do you wan to play \n")
if (answer) {
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

  let randomNumber = generateRandomNumber()
  let guessCount = 1

  while (guessCount < 10) {

  
  let userGuess = rls.questionInt()
  if (userGuess === randomNumber) {
    console.log("Congrats! You got it right!")
    let answer = rls.keyInYN("Do you wan to play agtain? \n")
if (answer) {
  gameLoop()
}
else {
  quitGame()
}
  }
  else if (userGuess > randomNumber) {
    console.log("Your guess is too high")
  }
  else if (userGuess < randomNumber) {
    console.log("Your guess is too low")
  }
guessCount++

}

console.log("You lose!")
quitGame()
}






/***
 * Generates a random number 
 *
 * @returns {number} - a number between 1 and 1000
 */
const generateRandomNumber = () => {
  return Math.random() * (1000-1) + 1;

}

startGame()

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}