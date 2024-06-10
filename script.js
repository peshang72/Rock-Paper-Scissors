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