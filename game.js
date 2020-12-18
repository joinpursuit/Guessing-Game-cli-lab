const rls = require('readline-sync')

const myArguments = process.argv.slice(2);
var   n   = 10


var m   = parseInt(myArguments[0])
var min = parseInt(myArguments[1])
var max = parseInt(myArguments[2])

if (myArguments.length === 0)
{
    m   = 10
    min = 1
    max = 1000
}


/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * @returns {undefined}
 */
    const startGame = () => 
    {

      if (rls.keyInYN("\nReady to start the game.? "))
       {
         console.log("Let's start!")
         gameLoop()
       }
       else
       {
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
const quitGame = () => 
{
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


const gameLoop = () => 

{


  console.log("I have a random number in mind")
  console.log(`\nIt's between ${min} and ${max}`)
  console.log(`\nYou have ${m} guesses total`)

 const number = generateRandomNumber()
  


  for (var n = m; n > 0; n -= 1)
  {
    
  
  const guess = rls.questionInt("guess : ")
 
  if (guess === number)
  {
      console.log("Congrats! You got it right!")
      if (rls.keyInYN("Do you want to play again.?"))
        {
          gameLoop()
          
        }else
        {
          quitGame()
        }
  } else if (guess > number)
    {
      console.log("Your guess is too high\n")
    }else if (guess < number)
      {
        console.log("Your guess is too low\n")
      }

    }


    console.log("\nYou lose!")
    console.log(`The random number was : ${number}\n`)
    quitGame()
}


/***
 * Generates a random number 
 *
 * @returns {number} - a number between 1 and 1000
 */
const generateRandomNumber = () => 

{
  var randomNumber = Math.floor((Math.random() * (max - min)+ min )) //Added Math.floor because I was getting decimals
 
  return randomNumber 
}

startGame()

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}