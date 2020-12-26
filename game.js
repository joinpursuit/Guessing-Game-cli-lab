const rls = require('readline-sync')

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * @returns {undefined}
 */
const startGame = () => {
//prompt user if they want to play
//if yes
//console log "let's start!"
//call gameLoop()
//else
// call quiteGame()
  console.log("Welcome!")
  let answer = rls.keyInYN("Ready?")
  if(answer) {
   console.log("lets's start!")
   gameLoop()
  }
  else {
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
  console.log ("I have a random number in mind")
  console.log ("It's between 1 and 1000")
  console.log ("You have 10 guesses")
  //start with a random number - store in a variable
  //have number of guesses = 10
  let numOfGuesses = 10
  const randomNumber = generateRandomNumber()

   //loop start
    // While  number of guesses > 0
    // if number === 0 then quitgame
  for(let numOfGuesses = 10; numOfGuesses > 0; numOfGuesses--){
  console.log("You have " + numOfGuesses + " remaining")
  let guess = rls.questionInt("Guess a number: ")
  //check the value of that number against the random one
  //if guess euqals rand you win
     // prompt user to play again
     // if yes, run gameLoop()
     // loop repeats
     // if no, run quiteGame()
     if(guess === randomNumber){
       //you win!!!!
       console.log("you win!")
       rls.keyInYN("Want to play again?") ? gameLoop() : quitGame()
     }
     else if (guess < randomNumber) {
       console.log("too low")
       //if the guess is smaller than random
       // log too low
     }
     else {
       console.log("too high")
       //else if its greater than random
       //log too high
     }
    
  }
}

/***
 * Generates a random number 
 *
 * @returns {number} - a number between 1 and 1000
 */
const generateRandomNumber = () => {
 let rand = Math.ceil(Math.random() * 1000)
 return rand   
}

startGame()

console.log ("you ran out of guesses")
quitGame()

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}