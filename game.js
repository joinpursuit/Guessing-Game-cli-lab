const rls = require('readline-sync')

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * @returns {undefined}
 */
const startGame = () => {
  console.log("Hello, welcome to our game")
  if (rls.keyInYN("Would you like to play a game with us?")) {
    gameLoop();
    console.log("Let's start!")
  } else {
    quitGame();
    console.log("Have a nice life!")
  }
}


/**
 * Logs "Goodbye!"
 * Calls process.exit() to quit the game
 * 
 * @returns {undefined}
 */
const quitGame = () => {
  console.log("Goodbye!");
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
  let guessCount = 10
  let randomNumber = generateRandomNumber()
  let guess
  while (guessCount > 0) {
    guess = rls.questionInt("Can you guess the number on my mind? \n")
    guessCount--;
    if (guess === randomNumber) {
      console.log("Congrats! You got it right!")
      if (rls.keyInYN("Do you want to play again?")) {
        gameLoop()
      } else {
        quitGame()
      }
    } else if (guess > randomNumber) {
      console.log("Your guess is too high")
    } else {
      console.log("Your guess is too low")
    }
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
  let randomNum = Math.floor(((Math.random() * 1000) + 1));
  return randomNum
}

startGame()

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}