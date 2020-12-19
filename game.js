const rls = require('readline-sync')

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * @returns {undefined}
 */
const startGame = () => {
  console.log("Welcome!")
  
  let answer = rls.keyInYN("Ready?")
  if(answer) {
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

// * Generate a random number and store it in a variable
// * Take an input (guess) from the user using `rls.questionInt()`
// * If the guess is correct, log "Congrats! You got it right!"
//   * Prompt the user if they want to play again
//     * if Y, call `gameLoop()`
//     * if N, call `quitGame()`
// * If the guess is high, log "Your guess is too high"
// * If the guess is low, log "Your guess is too low"
// * Starting with 10, decrease the number of guesses after each attempt
// * If the number of guesses reaches 0, log "You lose!" and call `quitGame()
 // startGame()
  //   let guessCount = 10

  // while (guessCount>10){
  
  // else{
  //   console.log("Your guess is too high")
  //   console.log("Your guess is too low")
  // }
  // guessCount -= 1
  // }

  const gameLoop = () => {
    generateRandomNumber()
    console.log("I have a random number in mind")
    console.log("It's between 1 and 1000")
    console.log("You have 10 guesses total")
  }
  
  const guess = rls.questionInt()
  
  // if (guess === generateRandomNumber){
  //   console.log("Congrats! You got it right!")
  //   answer(rls.keyInYN="Would you like to play again?")
  //   if(answer) {
  //     console.log("Let's start!")
  //     gameLoop()
  //   }
  //     else{
  //       quitGame()
  //     }
  // }
  // else if (guess > generateRandomNumber){
  //   console.log("Your guess is too high")
  // }
  //   else if( guess < generateRandomNumber){
  //   console.log("Your guess is too low")
  // }
/***
 * Generates a random number
 *
 * @returns {number} - a number between 1 and 1000
 */
const generateRandomNumber = () => {
    let number = Math.floor(Math.random() * 1000)

    return number

}

startGame()

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}