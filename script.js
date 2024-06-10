function getComputerChoice() {
    let randomChoice = Math.random();
    let compChoice;
    if (randomChoice < 0.25)
        return compChoice = "Rock";
    else if (randomChoice >= 0.25 && randomChoice < 0.75)
        return compChoice = "Paper";
    else {
        return compChoice = "Scissors";
    }
}
function getHumanChoice() {
    return requestedChoice = prompt("Let's play Rock Paper Scissors!");
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice.toLowerCase()) {
        console.log(`The computer's choice is ${computerChoice}`);
        console.log("It's a Tie!");
    }
    else if (humanChoice === "rock" && computerChoice === "Paper") {
        console.log(`The computer's choice is ${computerChoice}`);
        console.log("You lost this round!");
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "Scissors") {
        console.log(`The computer's choice is ${computerChoice}`);
        console.log("Congrats! You won!");
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "Rock") {
        console.log(`The computer's choice is ${computerChoice}`);
        console.log("You lost!");
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "Paper") {
        console.log(`The computer's choice is ${computerChoice}`);
        console.log("Congrats! You won!");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "Scissors") {
        console.log(`The computer's choice is ${computerChoice}`);
        console.log("You lost!");
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "Rock") {
        console.log(`The computer's choice is ${computerChoice}`);
        console.log("Congrats! You won!");
        humanScore++;
    }
    else {
        console.log("Invalid Input!");
    }

}