const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let secretNumber = 6;

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
      askGuess();
    }
  });
}

askGuess();
