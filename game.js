const rls = require('readline-sync')

let myArgs = process.argv.slice(2);
guessCount = myArgs[0];
min = myArgs[1];
max = myArgs[2];

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * @returns {undefined}
 */
const startGame = (guessCount, min, max) => {
  if(rls.keyInYN('Want to play a game?')){
    console.log('Let\'s start!');
    gameLoop(guessCount, min, max);
  }else{
    console.log('Have a nice life!');
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
  console.log('Goodbye!');
  process.exit();
}

/**
 * Controls the flow of the game.
 * Should prompt the user to play again once all
 * guesses have been made or correct answer guessed
 * 
 * @returns {undefined}
 */
const gameLoop = (guessCount = 10, min = 1, max = 1000) => {
  console.log('I have a random number in mind');
  console.log(`It\'s between ${min} and ${max}`);
  console.log(`You have ${guessCount} guesses total`);
  // Generate a random number and store it in a variable
  // let randomNum = 5; // this is def a random number
  let randomNum = generateRandomNumber(min, max);
  // Take an input (guess) from the user using rls.questionInt()
  while(guessCount > 0){
    let guess = rls.questionInt();
    if(guess === randomNum){
      gameOver(true);
    }else{
      guessCount--;
      if(guessCount === 1){
        console.log(`You have ${guessCount} guess left!`);
      }else {
        console.log(`You have ${guessCount} guesses left!`);
      }
      if(guess > randomNum){
        console.log('You\'re guess is too high.');
        max = randomNum - 1;
      }else{
        console.log('You\'re guess is too low.');
        min = randomNum + 1;
      }
    }
  }
  gameOver(false);
}

const gameOver = humanWins => {
  if(humanWins){
    console.log('Congrats! You got it right!');
  }else{
    console.log('You lose!');
    quitGame();
  }  
  if(rls.keyInYN('Want to play again?')){
    console.log('Let\'s start!');
    gameLoop();
  }else{
    console.log('Have a nice life!');
    quitGame();
  }
}

/***
 * Generates a random number 
 *
 * @returns {number} - a number between 1 and 1000
 */
const generateRandomNumber = (min, max) => {
  let num = Math.floor(Math.random() * (max - min + 1) + min);
  // console.log(num); // tested to make sure random *totally random number*
  return num;
}

startGame(guessCount, min, max);

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}