const rls = require('readline-sync')

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * @returns {undefined}
 */
const startGame = () => {
//prompt user if they want to play 
//if yes
//call gameLoop()
//else
//call quitGame()
  let answer = rls.keyInYN("Ready?")
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

  const rnumber = Math.ceil(generateRandomNumber())

  for (let num = 0; num <= 9; num += 1) {
    let answer = rls.questionInt("Guess the number: ")
    if (answer === rnumber) {
      console.log("Congrats! You win!")
      let playAgain = rls.keyInYN("Surely somebody as smart as you would like to play again? ")
      if (playAgain) {
        gameLoop()
      }
      else {
        quitGame()
      }
    }
    else if (answer > rnumber) {
      console.log("Your guess is too high")
    }
    else {
      console.log("Your guess is too low. But don't take it too hard, this game is tough")
    }
  }

  console.log("Sorry, you are out of guesses")
  quitGame()
}


/***
 * Generates a random number 
 *
 * @returns {number} - a number between 1 and 1000
 */

const generateRandomNumber = () => {
  return Math.random() * 1000
}



startGame()

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}