const rls = require("readline-sync");

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * 
 * //do not fully understand looping. I was playing catch up and ran out of time.
 * 
 * @returns {undefined}
//  */
const startGame = () => {
  if (rls.keyInYN("Would you like to play a game? ")) {
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
  let randomNum = generateRandomNumber();// assigned outside the loop so that it doesn't generate a number every time it loops.
  let count = 10;
  while (count > 0) {
    let input = rls.questionInt(" please pick a number ");
    if (input === randomNum) {
      console.log("Congrats! You got it right!");
      if (rls.keyInYN("would you like to play again?")) {
        gameLoop();
      } else {
        quitGame();
      }
    } else {
      count--;
      if (input > randomNum) { // set the input high or low based on the random number generated at the begining.
        console.log("Your guess is too high");
      } else if (input < randomNum) {
        console.log("Your guess is too low");
      }
    }
  }
  console.log("You lose!");// this is extra.  I just wanted to play again :)
  if (rls.keyInYN("would you like to play again?")) {
    gameLoop();
  }else{
    quitGame();
  }
 
};

/***
 * Generates a random number
 *
 * @returns {number} - a number between 1 and 1000
 */
const generateRandomNumber = () => {
  return Math.floor(Math.random() * 1001);
};
startGame(); // for some reason this needs to be here in order for the game to start;

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber,
};
