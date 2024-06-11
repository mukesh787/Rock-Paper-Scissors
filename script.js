
const choices=["rock","paper","scissors"];

function getComputerChoice(){
    return choices[Math.floor(Math.random()*3)];
   
}

// function getHumanChoice(){
//     let humanChoice = prompt("Rock, Paper, or Scissors?")
//     humanChoice = humanChoice.toLowerCase();
//     return humanChoice;
// }



let humanScore=0;
let computerScore=0;

function playRound(humanChoice,computerChoice){
    if (
        (computerChoice === "rock" && humanChoice === "scissors")||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        computerScore++;
        resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    } else if (computerChoice === humanChoice) {
        resultDiv.textContent = `It's a tie! Both chose ${humanChoice}`;
    } else {
        humanScore++;
        // console.log(`You win! ${computerChoice} beats ${computerChoice}`)
        resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    }

    scoreDiv.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;

    if (humanScore === 5) {
        resultDiv.textContent = "Congratulations! You won the game!";
        resetGame();
    } else if (computerScore === 5) {
        resultDiv.textContent = "Sorry! You lost the game!";
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
}



const buttons=document.querySelectorAll("button");
const resultDiv=document.querySelector("#result");
const scoreDiv=document.querySelector("#score");

buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        playRound(button.id,getComputerChoice());
    })
})


