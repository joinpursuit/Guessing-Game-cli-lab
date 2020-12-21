const rls = ({ keyInYN } = require('readline-sync'));

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 *
 * @returns {undefined}
 */
const startGame = () => {
	if (rls.keyInYN('Hey want to play?')) {
		console.log(`I have a random number in mind`);
		console.log(`It's between 1 and 1000`);
		console.log(`You have 10 guesses total`);
		console.log('Want to play again?');
		console.log("Let's start!");
		gameLoop();
	} else {
		console.log('Have a nice life!');
		quitGame();
	}
};

/**
 * Logs "Goodbye!"
 * Calls process.exit() to quit the game
 *
 * @returns {undefined}
 */
const quitGame = () => {
	console.log('Goodbye!');
	process.exit();
};

/**
 * Controls the flow of the game.
 * Should prompt the user to play again once all
 * guesses have been made or correct answer guessed
 *
 * @returns {undefined}
 */
const gameLoop = () => {};
startGame();
if (rls.keyInYN('Hey want to play?')) {
} else {
	quitGame();
}

/***
 * Generates a random number
 *
 * @returns {number} - a number between 1 and 1000
 */
const generateRandomNumber = () => {
	if (rls.keyInYN('I have a random number in mind')) console.log(`I have a random number in mind`);
	console.log(`It's between 1 and 1000`);
	let calls = 10;
	console.log(`You have 10 guesses total`);
	const play = () => {
    let top = 1000;
		while ((calls) => 10) {
      const random = 9
      const max = 1000
			if (rls.keyInYN('I have a random number in mind')) {
        let bottom = (Math.random() * 999);
			console.log(`You have 10 guesses total`);
				StartGame();
			} else {
				console.log("It's between 1 and 1000");

				console.log('I have a random number in mind');
			}
			console.log(`It's between 1 and 1000`);
		}
	};
	quitGame();
};

module.exports = {
	startGame,
	quitGame,
	gameLoop,
	generateRandomNumber,
};
