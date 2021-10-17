const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    let test1 = userInput === `rock`;
    let test2 = userInput === `paper`;
    let test3 = userInput === `scissors`;
    let test4 = userInput === `bomb`;
    if (test1 || test2 || test3 || test4) {
        return userInput;
    } else {
        return `You must chose either rock, paper, or scissors`;
    }
};

const getComputerChoice = () => {
    let computerChoice = {
        0: `rock`,
        1: `paper`,
        2: `scissors`,
    };

    let i = Math.floor(Math.random() * 3);

    return computerChoice[i];
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return `Tie`;
    }
    let test1 = userChoice === `rock` && computerChoice === `scissors`;
    let test2 = userChoice === `paper` && computerChoice === `rock`;
    let test3 = userChoice === `scissors` && computerChoice === `paper`;
    let test4 = userChoice === `bomb`;
    if (test1 || test2 || test3 || test4) {
        return `Player wins`;
    } else {
        return `Computer wins`;
    }
};

const playGame = () => {
    let userChoice = getUserChoice(`rock`);
    let computerChoice = getComputerChoice();

    return determineWinner(userChoice, computerChoice);
};

let arr = [];
let i = 1;
while (i < 15) {
    let g = playGame();
    arr.push(g);
    i++;
}

console.log(arr);
