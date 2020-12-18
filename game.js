const rls = require('readline-sync')

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * @returns {undefined}
 */
const startGame = () => {
  let answer = rls.keyInYN("Ready?")
  if(answer) {
    console.log("Let's start!")
    gameLoop()
  }
  else {
    console.log('Have a nice life!')
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
  console.log("I have a random number in mind\n")
  console.log("It's between 1 and 1000\n")
  console.log("You have 10 guesses\n")
let randNum = generateRandomNumber()
let guessCount = 10
let guess = rls.questionInt() 
while(guessCount < 10) {
if(guess = randNum) {
  console.log("Congrats! You got it right!") 
    if(rls.keyInYN("Want to play again?\n")) {
       gameLoop()
    }
    else {
        quitGame()
    }
}
else if(guess > randNum) {
  console.log("Your guess is too high")
  guessCount --
}
else if (guess < randNum) {
  console.log("Your guess is too low")
  guessCount --
}

}





}


/***
 * Generates a random number 
 *
 * @returns {number} - a number between 1 and 1000
 */
const generateRandomNumber = () => {
  return (Math.random()* 1000)

}

startGame()

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}