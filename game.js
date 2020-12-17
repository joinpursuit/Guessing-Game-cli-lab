const rls = require('readline-sync')

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * @returns {undefined}
 */
const startGame = () => {
    console.log("Welcome!")
    let answer = rls.keyInYN("Ready?")
    if (answer) {
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
    console.log("I have a random number in mind")
    console.log("It's between 1 and 1000")
    console.log("You have 10 guesses total")
    let number = generateRandomNumber()
    let guess = 1
    while (guess < 10) {
        let player = rls.questionInt()
        if (player === number) {
            console.log("Congrats! You got it right!")
            let answer = rls.keyInYN("Are you going to play again? \n")
            if (answer) {
                gameLoop()
            } else {
                quitGame()
            }
        } else if (player > number) {
            console.log("The number is too high")
        } else if (player < number) {
            console.log("The number is too low")
        }
        guess++
    }
    console.log("YOU LOOSE THE GAME!")
    quitGame()

}


/***
 * Generates a random number 
 *
 * @returns {number} - a number between 1 and 1000
 */
const generateRandomNumber = () => {
    let number = Math.floor(Math.random() * 1000)

    return number

}

startGame()

module.exports = {
    startGame,
    quitGame,
    gameLoop,
    generateRandomNumber
}