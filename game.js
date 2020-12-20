const rls = require('readline-sync')

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * @returns {undefined}
 */
const startGame = () => {
  if(rls.keyInYN("Ready to play? Y or N")) {
      console.log("Let's start!")
      gameLoop()
    }else {
      console.log("Have a nice life!")
      quitGame();
    }
  }
/**
 * Logs "Goodbye!"
 * Calls process.exit() to quit the game
 * 
 * @returns {undefined}
 */
function quitGame() {
  console.log("Goodbye!");
  process.exit();
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
  let guess = 565;
  rls.questionInt()
  if (guess = true)
{

}
}


/***
 * Generates a random number 
 *
 * @returns {number} - a number between 1 and 1000
 */
const generateRandomNumber = () => {
  let min = 1;
  let max = 1000;
    return Math.random() * (max - min) + min;
  }


startGame()

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}