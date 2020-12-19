const rls = require('readline-sync')

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * @returns {undefined}
 */
const startGame = () => {

  console.log('Welcome!!')
  let answer = rls.keyInYN('Wanna play a game?')

  if (answer) {  
    console.log('Let\'s start!')
    return gameLoop()
  }
  else {
    console.log('Have a nice life!')
    return quitGame()
  }    
}

/**
 * Logs "Goodbye!"
 * Calls process.exit() to quit the game
 * 
 * @returns {undefined}
 */
const quitGame = () => {
  console.log('Goodbye!')
  return process.exit()
}
/**
 * Controls the flow of the game.
 * Should prompt the user to play again once all
 * guesses have been made or correct answer guessed
 * 
 * @returns {undefined}
 */
const gameLoop = () => {

  console.log('I have a random number in mind')
  console.log('It\'s between 1 and 1000')
  console.log('You have 10 guesses')
  const randomNumber = generateRandomNumber ()  
  let attempt = 10

  const innerLoop = () => {
    while (attempt > 0) {

      const userInput = rls.questionInt(`What's your guess? \n`)

      if (userInput === randomNumber) {

        console.log('Congrats! You got it right!')
        let anotherRound = rls.keyInYN('Wanna play another round? \n')
        
          if (anotherRound) {
          return gameLoop()
          }
          else {
          return quitGame()
          }
      }
      else if (userInput > randomNumber){
        attempt -= 1
        console.log('Your guess is too high')
        console.log(`You have ${attempt} attempts left!`)
        return innerLoop()
      }
      else if (userInput < randomNumber) {
        attempt -= 1
        console.log('Your guess is too low')
        console.log(`You have ${attempt} attempts left!`)
        return innerLoop() 
      }
    }
    console.log(`You lose!`)
    return quitGame()
  }
  innerLoop()
}


/***
 * Generates a random number 
 *
 * @returns {number} - a number between 1 and 1000
 */
const generateRandomNumber = () => {
  return Math.floor(Math.random() * (1000 - 1 + 1) + 1)
}

startGame()

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}