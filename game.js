const rls = require('readline-sync')

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * @returns {undefined}
 */
const startGame = () => {

// prompt user if they want to play
// if yes
//console log "Let's Start!"
// call gameLoop()
// else
// call quitGame()

  let answer = rls.keyInYN("Ready?")
  if (answer){
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
  console.log("I have a random number in mind \n")
  console.log("It's between 1 and 1000 \n")
  console.log("You have 10 guesses \n")
let randNum = generateRandomNumber()
let guess = rls.questionInt("Give us your guess!")
if (guess = 20) {
  console.log ("Congrats! You got it right!")
}
else if (guess < 20) {
  console.log ("Your guess is too high")
  else {
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
  let () =

}

startGame()

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}