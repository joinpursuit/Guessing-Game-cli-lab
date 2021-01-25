const rls = require("readline-sync");

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 *
 * @returns {undefined}
 */
const startGame = () => {
  if (rls.keyInYN("Hey want to play?")) {
    console.log("Let's start!");
    gameLoop();
  } else {
    console.log("Have a nice life!");
    quitGame();
  }
};

/**
 * Logs "Goodbye!"
 * Calls process.exit() to quit the game
 *
 * @returns {undefined}
 */
const quitGame = () => {
  console.log("Goodbye!");
  process.exit();
};

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
  let num = generateRandomNumber()
  let guesses = 10;
  while (guesses > 0) {
    let userGuess = rls.question("\nWhat is your guess? ");
    if (userGuess === num) {
      console.log(
        "\nCongratulations!! You guessed correctly! The number was: " + num
      );
    } else {
      console.log("\nSorry, wrong answer. Please guess again");
      guesses--;
      console.log("You have " + guesses + " guesses left.");
    }
  }
  if (guesses === 0) {
    console.log("Sorry you ran out of guesses! Better luck next time!");
    process.exit();
  }
};

/***
 * Generates a random number
 *
 * @returns {number} - a number between 1 and 1000
 */
const generateRandomNumber = () => {
  let num = Math.floor(Math.random() * 1000);
  return num;
};

startGame();

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber,
};
