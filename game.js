const readLineSync = require("readline-sync");

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 *
 * @returns {undefined}
 */
const startGame = () => {
    if (readLineSync.keyInYN("Do you want to play?")) {
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
  console.log("Goodbye!")
  process.exit()

};

/**
 * Controls the flow of the game.
 * Should prompt the user to play again once all
 * guesses have been made or correct answer guessed
 *
 * @returns {undefined}
 */
const gameLoop = () => {
    console.clear();
    console.log("I have a random number in mind");
    console.log("It's between 1 and 1000");
    console.log("You have 10 guesses total");
    let randomNum = generateRandomNumber ();
    
for (let guessCount = 10; guessCount > 0; guessCount--) {
  let guess = readLineSync.questionInt("What is you guess? \n");
  if (guess === randomNum) {
    console.log("Congrats! You got it right!");
    if (readLineSync.keyInYN("Do you want to play again?")) {
      gameLoop()
    }else {
      quitGame()
    }
  } else if(guess > randomNum) { 
    console.log("Your guess is too high") 
  } else {
    console.log("Your guess is too low")
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
  let bottom = 1;
  let top = 1000;
  let randomNumber = Math.floor(Math.random() * (top - bottom) + bottom);
  return randomNumber;
}

startGame();

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber,
};

