const rls = require('readline-sync')

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * @returns {undefined}
 */
const startGame = () => {
  answer = rls.keyInYN("Do you want to start playing the game?");
    if(answer === true) {
        console.log("Let's start!")
        gameLoop();
    }else {
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
    let number = generateRandomNumber();
    let numOfGuesses = 10;
    console.log(`${numOfGuesses} remaining`);
    console.log('I have a random number in mind')
    console.log("It's between 1 and 1000")
    console.log('You have 10 guesses total')

    while (numOfGuesses > 0) {
      let guess = rls.questionInt("What's your guess?\n"); // rls.question will make it a string
      if (guess === number) {
        console.log("Ohhh you're good! You win!");
        continueYN = rls.keyInYN("Do you want to play again?\n");
      if (continueYN === true) {
        startGame();
      } else {
        quitGame();
      }
    } else{
      numOfGuesses--;
      if (numOfGuesses === 0) {
        console.log("No more chances. You lose!\n");
        console.log(`The number is ${number}!`)
        quitGame();
      }
      if (guess > number) {
        console.log("You guessed too high.\n");
      } else {
        console.log("You guessed too low.\n");
      }
console.log(`You have ${numOfGuesses} chances left.\n`);
    }
  }
};
    

 
/***
 * Generates a random number 
 *
 * @returns {number} - a number between 1 and 1000
 */
const generateRandomNumber = () => {
  let randomNumber = Math.floor(Math.random() * 1000 ) + 1;
  return randomNumber
}

startGame()

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}