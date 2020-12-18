const rls = require('readline-sync')

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * @returns {undefined}
 */
const startGame = () => {
  if(rls.keyInYN("Are you ready to start the game?")){
    console.log("Let's start!")
    gameLoop()
  } else {
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
  let n = generateRandomNumber()
  let count = 10
  let countMax = count
  let guess = 0
  let min = 1
  let max = 1000

  if(process.argv.length >= 3){
    count = parseInt(process.argv[2])
    countMax = count
  }
  if(process.argv.length >= 5){
    min = parseInt(process.argv[3])
    max = parseInt(process.argv[4])
  } else if(process.argv.length === 4)
      min = parseInt(process.argv[3])
      
  console.log("I have a random number in mind")
  console.log(`It's between ${min} and ${max}`)
  console.log(`You have ${count} ${count > 1 ? "guesses" : "guess"} total\n`)
  for(let i = count; i > 0; i--){
    console.log("Please enter your guess: ")
    guess = rls.questionInt()
    if(guess === n){
      if(i === countMax)
        console.log("Congrats!!! You got it in first try!!!\n")
      else
        console.log("Congrats! You got it right!\n")
      break
    }
    guess > n ? console.log("Your guess is too high") : console.log("Your guess is too low")
    count--
    console.log(`You have ${count} ${count > 1 ? "chances" : "chance"} left\n`)
    if(count !== 0){
      if(!(rls.keyInYN("Do you want to try again?")))
        quitGame()
    } else
        console.log("You lose!\n")
  }
  if(rls.keyInYN("Do you want to play again?"))
    gameLoop()
  else
    quitGame()
}


/***
 * Generates a random number 
 *
 * @returns {number} - a number between 1 and 1000
 */
const generateRandomNumber = () => {
  let min = 1
  let max = 1000
  
  if(process.argv.length >= 5){
    min = parseInt(process.argv[3])
    max = parseInt(process.argv[4])
  } else if(process.argv.length === 4)
      min = parseInt(process.argv[3])

  return Math.floor(Math.random() * (max - min + 1)) + min
}

startGame()

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}