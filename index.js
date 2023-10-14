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
    if (string) {
        return string[0].toUpperCase() + string.slice(1).toLowerCase();
    } else {
        return "Invalid";
    }
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


function game() {
    keepPlaying = true;
    while (keepPlaying) {
        let playerSelection = prompt("Enter your choice: Rock, Paper or Scissors?");
        if (playerSelection === null){
            keepPlaying = false;
            break;
        }
        let computerSelection = getComputerChoice();
        alert(playRound(playerSelection, computerSelection));
        keepPlaying = confirm("Do you want to play again?");
    }
}

game();