let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {

    return Math.floor(Math.random() * 10)

}

const validateHumanGuess = () => {

    let validate = humanGuess < 0 || humanGuess > 9;

    if (validate) {
        alert("Your guess is out of range!");
    }

}

const compareGuesses = (humanGuess, computerGuess, target) => {

    validateHumanGuess();

    let test1 = humanGuess === computerGuess;

    let h = getAbsoluteDistance(humanGuess, target);
    let c = getAbsoluteDistance(computerGuess, target);
    let test2 = h > c;

    return (test1 || test2);

}

const getAbsoluteDistance = (num1, num2) => {

    return Math.abs(num1 - num2);

}

const updateScore = (winner) => {

    (winner === 'human') ? humanScore++ : computerScore++;

}

const advanceRound = () => {
    currentRoundNumber++;
}