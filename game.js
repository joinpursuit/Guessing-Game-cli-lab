const rls = require('readline-sync')

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * @returns {undefined}
 */
const startGame = () => {
  if (rls.keyInYN("do you want to play?")) {
    console.log("Let's start!");
    gameLoop();
  } else {
    console.log("Have a nice life!");
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
console.log("I have a random number in mind");
console.log("It's between 1 and 1000");
console.log("You have 10 guesses total");
let min = 1
let max = 1000
let guessCount = 10
let randomNum = generateRandomNumber();
while(guessCount > 0) {
  let guess = rls.questionInt("what is your guess ?")
  if (guess === randomNum) {
    console.log("congrats! you got it right!")
      if(rls.keyInYN("Do you wanna play again ?")) {
        gameLoop()
      } else {
        quitGame()
      }
  } else {
    if(guess < randomNum) {
      console.log("Your guess is too low")
    } else {
      console.log("your guess is too high")
    }
    guessCount --;
    if(guessCount === 0) {
      console.log("You lost!")
      quitGame();
    }
    }
  }
}


/***
 * Generates a random number 
 *
 * @returns {number} - a number between 1 and 1000
 */
const generateRandomNumber = () => {
 let min = 1
 let max = 1000
 let randomNum = Math.floor(Math.random() * max) + min
 return randomNum
}

startGame()

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}