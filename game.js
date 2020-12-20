const rls = require('readline-sync')

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * @returns {undefined}
 */
const startGame = () => {
  if (rls.keyInYN("Would you like to play a game? ")){
    console.log("Let's start!")
    gameLoop();
  } else{
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
const quitGame = () => {
  console.log("Goodbye!")
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
  guessCount = 10
  console.log("I have a number in mind")
  console.log("It's between 1 and 1000")
  console.log("You have 10 guesses")
  const randomNum = generateRandomNumber();
  while (guessCount > 0){
  guessNum = rls.questionInt("What is the number you guess? ")
  if (guessNum === randomNum){
    console.log(`Congratulations! You got it right! The number I guessed was ${guessNum}`)
    if (rls.keyInYN("Would you like to play again? ")){
      console.clear();
      gameLoop();
    } else{
      quitGame();
    }
  } else if (guessNum > randomNum){
    console.log("Your guess is too high.")
    guessCount--
    console.log(`You have ${guessCount} guesses left.`)
  } else if (guessNum < randomNum){
    console.log("Your guess is too low.")
    guessCount--
    console.log(`You have ${guessCount} guesses left.`)
  }
  if (guessCount === 0){
    console.log("You lose!")
    quitGame();
  }
}
}


/***
 * Generates a random number 
 *
 * @returns {number} - a number between 1 and 1000
 */
const generateRandomNumber = () => {
  return Math.floor(Math.random() * 1001)

}

startGame()

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}