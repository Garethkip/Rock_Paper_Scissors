const rock = document.getElementsByClassName("Result")
const paper = document.getElementsByClassName("playerScore")
const scissors = document.getElementsByClassName("computerScore")
const choices = ['rock', 'paper', 'scissors']
let result = ""

function playGame(playerMove) {
    computerMove = choices[Math.floor(Math.random() * 3)]
    if (playerMove === computerMove) {
        result = "Tie"
    } else {
        switch (playerMove) {
            case "rock":
                result = (computerMove === "scissors") ? "Win" : "Lose";
                break;
            case "paper":
                result = (computerMove === "rock") ? "Win" : "Lose";
                break;
            case "scissors":
                result = (computerMove === "paper") ? "Win" : "Lose";
                break;
        }
    }
    console.log('Computer: ' + computerMove + ' Player: ' + playerMove)
    console.log(result)
}