const rls = require("readline-sync");

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 *
 * @returns {undefined}
 */
const startGame = () => {
  if (rls.keyInYN("Do you want to play a game with me?")) {
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
const gameLoop = (number) => {
  let chances = 10;
  let guess;
  console.log("I have a random number in mind")
  console.log("It's between 1 and 1000")
  console.log("You have 10 guesses total")
  if(chances = 0) {
    console.log("No more chances. You lose!\n")
      if (rls.keyInYN("Do you want to play again?\n" === true)){
        startGame();
      } else {
        quitGame();
      }
  } 
  while(chances > 0) {
    guess = rls.question("What's your guess?\n")
    chances--;
  }
  if(guess === number) {
    console.log("Ohhh you're good! You win!")  
    if (rls.keyInYN("Do you want to play again?\n" === true)){
      startGame();
    } else {
      quitGame();
    }
  } 
};

/***
 * Generates a random number
 *
 * @returns {number} - a number between 1 and 1000
 */
const generateRandomNumber = () => {
  let number = Math.floor(Math.random() * 1000) + 1;
  return number;
};

startGame();

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber,
};
