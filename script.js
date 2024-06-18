let choice= ["rock", "paper", "scissors"];
humanScore=0;
computerScore=0;

console.log(playRound(getHumanChoice(),getComputerChoice()));

function getComputerChoice(){
    let computerChoice=choice[Math.floor(Math.random()*choice.length)];
    return computerChoice;
}

function getHumanChoice(){
    let humanChoice= prompt("Please choose 'rock', 'paper', or 'scissors'.");
    return humanChoice = choice.includes(humanChoice.toLowerCase())? humanChoice.toLowerCase(): "This was not one of the options.";
}

function playRound(humanChoice, computerChoice){
    if (choice.includes(humanChoice)){
        while (humanChoice === computerChoice) {
           computerChoice = getComputerChoice();
        }
        return (humanChoice==="rock" && computerChoice === "scissors"  || humanChoice === "scissors"  && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock")? `You Win! ${humanChoice} beats ${computerChoice}`: `Computer Wins. ${computerChoice} beats ${humanChoice}.`;

    } return "Your entry is invalid."
}