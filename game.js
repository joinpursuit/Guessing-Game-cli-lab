const rls = require('readline-sync')

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * @returns {undefined}
 */
const startGame = () => {
//welcome the user
/*prmopt the user if they want to play
*if they want to play
*run play function
*else
*leave the game
*/
// console.log("Welcome! Let's play!")
let answer = rls.keyInYN("Do you want to play? \n")
if(answer === true){
  console.log("Let's start!")
  console.log("")
    gameLoop()
}

else{
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
  console.log('I have a random number in mind')
  console.log("It's between 1 and 1000")
  console.log('You have 10 guesses total')
  let randomNumber = generateRandomNumber()
  let guessAttempts = 10

  while(guessAttempts > 0){
    let userGuess = rls.questionInt("what is your guess? \n")
    if(userGuess === randomNumber){
      console.log("Congrats! You got it right!")
      if(rls.keyInYN("Do you want to play again? \n")) {
        console.log("")
        gameLoop()
      }
      else {
        quitGame()
      }

    }
    else if(userGuess > randomNumber){
      guessAttempts--
      console.log("Your guess is too high. You have " + guessAttempts + " left")
    }
    else if(userGuess < randomNumber){
      guessAttempts--
      console.log("Your guess is too low. You have " + guessAttempts + " left")
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
  let number = Math.round((Math.random()*1000) + 1)
  return number
}

startGame()

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}