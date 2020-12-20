const rls = require('readline-sync')

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * @returns {undefined}
 */
const startGame = () => {
  let args = process.argv.slice(2);
  let guessCount = args[0];
  let min = args[1];
  let max = args[2];
  if (rls.keyInYN("Do you want to start the game?")) {
    console.log("Let's start!");
    gameLoop();
  } else {
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
  let randomNumber = generateRandomNumber();
  let totalGuesses = 10;
  let input;

  while (totalGuesses > 0) {

    input = rls.questionInt("what is your guess? \n");
    totalGuesses--;

    if (input === randomNumber) {
      console.log("Congrats, you got it right!")
      if (rls.keyInYN("Do you want to play again?")) {
        gameLoop();
      } else {
        quitGame();
      }
    } else if (input < randomNumber) {
      console.log("You guess is too low ")
    } else {
      console.log("You guess is too high ")
    }


  }
  console.log("You lose!")
  quitGame();


}


/***
 * Generates a random number 
 *
 * @returns {number} - a number between 1 and 1000
 */
const generateRandomNumber = () => {
  let num = Math.round(Math.random() * 1000);
  return num;
}

startGame()

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}