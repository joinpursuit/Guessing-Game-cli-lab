const rls = require("readline-sync")

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * @returns {undefined}
 */

 const startGame = () => {
   if(rls.keyInYN("Do you want to start playing the game? Y or N")){
     console.log("Let's start!")
    gameLoop()
  }else {
    console.log("Have a nice life!")
    quitGame()
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
      console.log("I have a random number in mind")
      console.log("It's between 1 and 1000")
      console.log("You have 10 guesses total")
      let guessCount = 10;
      let ranNum = (10); //Math.floor(Math.random() * (1000 - 1) + 1);
      while (guessCount > 0 ){
        let guess = rls.question("Please take a guess \n");
          if (guess == ranNum){
            console.log("Congrats! You got it right!")
            if (rls.keyInYN( "Would you like to play again?")){
              gameLoop();
            }else{
              quitGame();
            };
          }else if ( guess < ranNum){
            console.log("too low")
          }else if( guess > ranNum){
            console.log("too high")
          }else{
            console.log("Try that again")
            continue;
          }
      guessCount--
      console.log( "you have " + guessCount + " guesses left")
      }
    return console.log( "You lose!")
    quitGame()
}

 
/***
 * Generates a random number 
 *
 * @returns {number} - a number between 1 and 1000
 */
const generateRandomNumber = () => {
  let randomNumber = 0 
  randomNumber = Math.random() * (1000 - 1) + 1;
  return randomNumber
}

startGame()

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}