let choice= ["rock", "paper", "scissors"];
let humanScore=0;
let computerScore=0;

gameLoop();

function gameLoop(){
    while (humanScore<5 && computerScore<5){
        (playRound(getHumanChoice(),getComputerChoice()));
    } console.log(humanScore===5? "You win the game!":"You lost the game...");

}
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
           let result = (humanChoice==="rock" && computerChoice === "scissors"  || humanChoice === "scissors"  && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock"|| false);
        
          
          if (result){
           humanScore++;
            console.log(`You Win! ${humanChoice} beats ${computerChoice}.
            The score is now:
            Human:${humanScore} Computer:${computerScore}`);
        } else {
            computerScore++;
            console.log(`Computer Wins. ${computerChoice} beats ${humanChoice}.    
            The score is now:
            Human:${humanScore} Computer:${computerScore}`);
        }

    } else {console.log("Your entry is invalid.");}
}

