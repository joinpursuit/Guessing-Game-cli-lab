const rls = require('readline-sync')

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * @returns {undefined}
 */
const startGame = () => {
  console.log("Hello!")
  let answer = rls.keyInYN("Do you want to play a game")
  if (answer) {
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
  generateRandomNumber()
  console.log("I have a random number in mind")
  console.log("It's between 1 and 1000")
  let args = rls.questionInt("How many gusses would you like? ")
  
  console.log("You have " + args + " guesses total")

  const randomNumber = generateRandomNumber()

  for (numOfGuesses = args ; numOfGuesses >= 0; numOfGuesses--) {

    if (numOfGuesses === 0) {
      console.log("You loose!!")
      rls.keyInYN("Would you like to play again?") ? gameLoop() : quitGame()
    }
    //console.log(randomNumber)
    let guess = rls.questionInt("Guess a number: ")
    if (guess === randomNumber) {
      console.log("You Win!!!")
      rls.keyInYN("Would you like to play again?") ? gameLoop() : quitGame()
    } else if (guess > randomNumber) {
      console.log("To High!")
      console.log("You have " + (numOfGuesses - 1) + " guesses remaining")
    } else {
      console.log("To low!")
      console.log("You have " + (numOfGuesses - 1) + " guesses remaining")
    }



  }
}

/***
 * Generates a random number 
 *
 * @returns {number} - a number between 1 and 1000
 */
const generateRandomNumber = () => {

  return Math.round(Math.random() * 1000)

}

startGame()

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}