let choice=["rock", "paper", "scissors"];
let humanScore=0;
let computerScore=0;
let humanScoreSpan= document.querySelector('#human-score-span');
let computerScoreSpan= document.querySelector('#computer-score-span');
let displayMsg= document.querySelector('#display-msg');
let humanChoice=""
let choiceDiv= document.querySelector('#choice');
let replayBtn= document.querySelector('#replay');
/*gameLoop();

function gameLoop(){
    while (humanScore<5 && computerScore<5){
        (playRound(getHumanChoice(),getComputerChoice()));
    } console.log(humanScore===5? "You win the game!":"You lost the game...");
}*/
function getComputerChoice(){
    let computerChoice=choice[Math.floor(Math.random()*choice.length)];
    return computerChoice;
}


choiceDiv.addEventListener('click', (event)=>{
    let target= event.target;

    switch(target.id) {
        case 'rock':
            humanChoice='rock';
            break;
          case 'paper':
            humanChoice='paper';
            break;
        case 'scissors':
            humanChoice="scissors";
            break;
    }
    console.log(humanChoice)
    playRound(humanChoice,getComputerChoice())
})

function endGame(){
    humanScore===5? displayMsg.textContent+=`You have won the game! Play again?`:displayMsg.textContent+=`You have lost the game. Try again?`;
    choiceDiv.style.display='none';
    replayBtn.style.display='block';
    replayBtn.addEventListener('click',reset);
}

function reset(){
    humanScore=0;
    computerScore=0;
    humanScoreSpan.textContent='0';
    computerScoreSpan.textContent='0';
    displayMsg.textContent='Rock, Paper, Scissors, Shoot!';
    replayBtn.style.display='none';
    choiceDiv.style.display='block';
}

function playRound(humanChoice, computerChoice){
        while (humanChoice === computerChoice){
           computerChoice = getComputerChoice();
        }
        let result = (humanChoice==="rock" && computerChoice === "scissors"  || humanChoice === "scissors"  && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock"|| false);
        if (result){
            humanScore++;
            displayMsg.textContent=`You Win! ${humanChoice} beats ${computerChoice}.`;
            humanScoreSpan.textContent=humanScore;
        } else {
            computerScore++;
            displayMsg.textContent=`Computer Wins. ${computerChoice} beats ${humanChoice}.`;
            computerScoreSpan.textContent=computerScore;
        }
        if (computerScore ===5 || humanScore===5){
            endGame();
        }
    }

