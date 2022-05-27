const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let secretNumber;
let numAttempts;

function randomInRange(min, max) {
  secretNumber = Math.floor(Math.random() * (max - min + 1) + min);
  askGuess();
}

function checkGuess(num) {
  if (num > secretNumber) {
    console.log("Too high.");
    return false;
  } else if (num < secretNumber) {
    console.log("Too low.");
    return false;
  } else {
    console.log("Correct!");
    return true;
  }
}

function askGuess() {
  rl.question("Enter a guess: ", (guess) => {
    if (checkGuess(Number(guess))) {
      rl.close();
      console.log("You win!");
    } else {
      numAttempts--;
      if (numAttempts > 0) {
        askGuess();
      } else {
        rl.close();
        console.log("You lose.");
      }
    }
  });
}

function askLimit() {
  rl.question("How many attempts would you like? ", (attempts) => {
    numAttempts = attempts;
    askRange();
  });
}

function askRange() {
  rl.question("Enter a min number: ", (min) => {
    rl.question("Enter a max number: ", (max) => {
      console.log(`I'm thinking of a number between ${min} and ${max}...`);
      randomInRange(Number(min), Number(max));
    });
  });
}

askLimit();
