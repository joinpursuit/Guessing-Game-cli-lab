const rls = require('readline-sync')

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * 
 * //do not fully understand looping. I was playing catch up and ran out of time.
 * 
 * @returns {undefined}
 */
const startGame = () => {
  const answer = rls.keyInYN("Would you like to play a game? ")
    if(answer === 'y') {
      console.log("Let's start")
      gameLoop();
    } else {
      console.log('Have a nice Life')
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
  console.log(' Goodbye') 
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
    let winningNumber = 777
    console.log(' I have a random number in mind ')
    console.log(" It's between 1 and 1000")
    console.log(' You have 10 guesses')
      const guess = rls.questionInt(' would you like to take a guess?')
        if (answer === 'Y') {
        console.log(' please pick a number ')
      } 
           console.log( ' ')
        

}


/***
 * Generates a random number 
 *
 * @returns {number} - a number between 1 and 1000
 */
const generateRandomNumber = () => {
    return Math.floor(Math.random()* 1001)
}
startGame()  




module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}