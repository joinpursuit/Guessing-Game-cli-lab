const rls = require('readline-sync')

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * @returns {undefined}
 */
const startGame = () => {
  // console.log("Thank you for playing the ultimate guessing game.");
  // console.log("I, the computer, will start with picking a number between 1 and 10,000");
  // console.log("If You don't guess my number in 15 guesses or less I win");
  // console.log("If you do, you win");
  // console.log("With each guess I will tell you if you are too high or too low");
  if(rls.keyInYN('Want to play a game?')){
    console.log('Let\'s start!');
    gameLoop();
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
const gameLoop = () => {
  console.log('I have a random number in mind');
  console.log('It\'s between 1 and 1000');
  console.log("You have 10 guesses total");
  let top = 1000;
  let bottom = 1;
  // Generate a random number and store it in a variable
  // let randomNum = 5;
  let randomNum = generateRandomNumber();
  let guessCount = 10;
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
        top = randomNum - 1;
      }else{
        console.log('You\'re guess is too low.');
        bottom = randomNum + 1;
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
const generateRandomNumber = () => {
  let num = Math.floor(Math.random() * 1000) + 1;
  console.log(num); // tested to make sure random
  return num;
}

startGame()

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}