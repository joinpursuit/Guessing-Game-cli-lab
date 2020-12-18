const rls = require('readline-sync')

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * @returns {undefined}
 */

 // prompt user if they want to play
 // if yes 
 // console log "Let's start!"
 // call gameLoop()
 // else 
 // call quitGame()
const startGame = () => {
  if (rls.keyInYN("Want to play a game?")){
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
  console.log("I have a random number in mind")
  console.log("It's between 1 and 1000")
  console.log("You have 10 guesses total")
    
  for (let guessCount = 10 ; guessCount > 0 ; guessCount--){  

    let num = generateRandomNumber()
    let guess = rls.questionInt("What is your guess? \n")
    
    if (guessCount === 1 && guess !== num) { 
      console.log("You Lose!")
      quitGame()
     } else if (guess === num) {
      console.log("Congrats! You got it right! \n")
      (rls.keyInYN("Want to play again?"))
          gameLoop()
      } else if (guess > num){
      console.log("Your guess is too high")
      } else if (guess < num){
      console.log("Your guess is too low")
      } 
      

    } 
  } 


/***
 * Generates a random number 
 *
 * @returns {number} - a number between 1 and 1000
 */
const generateRandomNumber = () => {
  let num = Math.floor(Math.random() * 1000) + 1
  return num 
}

startGame()

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}