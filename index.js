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


function findWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Draw";
    } else if (
        playerSelection === "Rock" && computerSelection === "Paper"
        || playerSelection === "Paper" && computerSelection === "Scissors"
        || playerSelection === "Scissors" && computerSelection === "Rock"
    ) {
        return "Computer";
    } else if (
        playerSelection === "Rock" && computerSelection === "Scissors"
        || playerSelection === "Paper" && computerSelection === "Rock"
        || playerSelection === "Scissors" && computerSelection === "Paper"
    ) {
        return "Player";
    }
}

function restart() {
    let resultDiv = document.querySelector("div#result");
    resultDiv.innerHTML = "";
    p = document.createElement("p");
    p.textContent = "Let's Go!!!"
    resultDiv.appendChild(p); 
    choiceDiv.addEventListener('click', game);
}

function displayFinalResult(resultDiv) {
    let p3 = document.createElement("p");
    let btn = document.createElement("button");
    btn.textContent = "PLAY AGAIN";
    if (playerScore === 5 && computerScore === 5) {
        p3.textContent = "It's a complete Draw! Want to try again?";
    } else if (playerScore === 5) {
        p3.textContent = "Congratulations, You Win! Want to play again?";
    } else if (computerScore === 5) {
        p3.textContent = "Game Over! Want to try again?";
    }
    resultDiv.append(p3, btn);
    btn.addEventListener('click', restart);

}

function game(event) {
    let computerSelection = getComputerChoice();
    let playerSelection = "";
    switch (event.target.id) {
        case "rock":
            playerSelection = "Rock";
            break;
        case "paper":
            playerSelection = "Paper";
            break;
        case "scissors":
            playerSelection = "Scissors";
            break;
    }
    if (playerSelection) {
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let resultDiv = document.querySelector("div#result");
        let winner = findWinner(playerSelection, computerSelection);
        switch (winner) {
            case "Computer":
                p1.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
                p2.textContent = `Player:${playerScore} Computer:${++computerScore}`;
                break;
            case "Player":
                p1.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
                p2.textContent = `Player:${++playerScore} Computer:${computerScore}`;
                break;
            case "Draw":
                p1.textContent = `It's a Draw! ${playerSelection} draws ${computerSelection}`;
                p2.textContent = `Player:${++playerScore} Computer:${++computerScore}`;
                break;
        }
        resultDiv.innerHTML = "";
        resultDiv.append(p1, p2);
        if (playerScore === 5 || computerScore === 5) {
            choiceDiv.removeEventListener('click', game);
            displayFinalResult(resultDiv);
            playerScore = 0;
            computerScore = 0;
        }
    }

}

let playerScore = 0;
let computerScore = 0;
let choiceDiv = document.querySelector("div#choice");
choiceDiv.addEventListener('click', game);

