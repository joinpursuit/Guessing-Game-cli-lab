const rls = require('readline-sync')

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * @returns {undefined}
 */
const startGame = () => {
  if (rls.keyInYN("Ready?")) {
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
  console.log("You have 10 guesses")
  console.log("I have a random number in mind")
  console.log("It's between 1 and 1000")
  

  let guessCount = 10
  let bottom = 1
  let top = 1000
  random = (Math.random() * (1000 - 1))
  let answer = rls.questionInt("What is your guess? \n")

  

  if (answer = random) {
    console.log("Congrats! You got it right!")
  } 
  else if (rls.keyInYN("Do you want to play again?")) {
    gameLoop()
  }  else {
    quitGame()
  }

  if (answer > random) {
    console.log("Your guess is too high")
  } else if (answer < random) {
    console.log("Your guess is too low")
  }

  guessCount --

  console.log("You lose!")
  quitGame()   

}


/***
 * Generates a random number 
 *
 * @returns {number} - a number between 1 and 1000
 */



 const generateRandomNumber = () => {
   return Math.random() * (1000 - 1) 
 }

startGame()

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}