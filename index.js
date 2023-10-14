function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        default:
            return "Scissors";
    }
}

function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);


    if (playerSelection === computerSelection) {
        return `It's a Draw! ${playerSelection} draws ${computerSelection}`;
    } else if (
        playerSelection === "Rock" && computerSelection === "Paper"
        || playerSelection === "Paper" && computerSelection === "Scissors"
        || playerSelection === "Scissors" && computerSelection === "Rock"
    ) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (
        playerSelection === "Rock" && computerSelection === "Scissors"
        || playerSelection === "Paper" && computerSelection === "Rock"
        || playerSelection === "Scissors" && computerSelection === "Paper"
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return "Invalid Choice! Try again.";
    }
}


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));