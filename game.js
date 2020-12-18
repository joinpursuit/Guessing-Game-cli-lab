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
    gameLoop()
  }
  else {
    console.log('Have a nice life!')
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
  console.log('Goodbye!')
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
  console.log('I have a random number in mind')
  console.log('It\'s between 1 and 1000')
  console.log('You have 10 guesses')
  const guessLoop = []
  for (let i = 10; i > 0; i -= 1) {
      guessLoop.unshift(i)
      console.log(`You have ${guessLoop[0]} attempts left!`)
      gameLoop()
  }
    if (i === 0) {
      console.log('You lose!')
      quitGame()
    }
  return i -= 1
}

const randomNumber = generateRandomNumber ()
let userInput = rls.questionInt('Choose a number between 1 and 1000 \n')
  
    if (userInput === randomNumber) {
      console.log('Congrats! You got it right!')
      let anotherRound = rls.keyInYN('Wanna play another round? \n')
        if (anotherRound) {
          gameLoop()
        }
        else {
          quitGame()
        }
    }
    else if (userInput > randomNumber){
      console.log('Your guess is too high')
      gameLoop()
    }
    else {
      console.log('Your guess is too low')
      gameLoop()
    }
      
    // const attempt = (i) => {
    //     while (i > 0) {
    //       i -= 1
    //       console.log(`You have ${i} attempts left!`)
    //       gameLoop()
    //     }
    //     if (i === 0) {
    //       console.log('You lose!')
    //       quitGame()
    //     }
    //   }

//}

/***
 * Generates a random number 
 *
 * @returns {number} - a number between 1 and 1000
 */
const generateRandomNumber = () => {
  return Math.round(Math.random() * (1-1000) + 1)
}
// const generateRandomNumber = () => {
//   return Math.round(Math.random() * (1-1000) + 1)
// }

startGame()

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}