const readlineSync = require("readline-sync")

const name = readlineSync.question("What's your name? ")
console.log("Hi " + name + " nice to meet you!")

