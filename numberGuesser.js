let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

const getAbsoluteDifference = (guess, target) => {
    return Math.abs(guess - target);
};

const compareGuesses = (humanGuess, computerGuess, target) => {
    if (humanGuess < 0 || humanGuess > 9) {
        alert("PICK A NUMBER BETWEEN 0 AND 9 INCLUSIVE");
        return;
    }

    let test1 = humanGuess === computerGuess;
    let test2 =
        getAbsoluteDifference(humanGuess, target) <
        getAbsoluteDifference(computerGuess, target);
    if (test1 || test2) {
        return true;
    } else {
        return false;
    }
};

const updateScore = (winner) => {
    if (winner === `computer`) {
        computerScore++;
    } else {
        humanScore++;
    }
};

const advanceRound = () => {
    currentRoundNumber++;
};
