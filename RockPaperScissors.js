/* 
Rules: 
1. Rock beats scissors
2. Scissor beats paper
3. Paper beats rock

Structure:
Player picks rock || paper || scissors
Computer returns rock || paper || scissors

IF player picks rock and COMPUTER returns paper, COMPUTER wins
ELSE player wins

IF player picks paper and COMPUTER returns scissors, COMPUTER wins
ELSE player wins

IF player picks scissors and COMPUTER returns rock, COMPUTER wins
ELSE player wins
*/

var choices = [
    'rock',
    'paper',
    'scissors'
]

function computerPlay(){
    let computerChoice = choices[Math.floor (Math.random() * choices.length)];
    return computerChoice;
}


//This defines how the gameplay will flow//

 function oneRound(playerSelection, computerSelection){
    if (playerSelection == "rock" && computerSelection == "paper") {
        result = "You Lose! Paper Beats Rock";
    }

    if (playerSelection == 'paper' && computerSelection == 'scissors') {
        result = "You Lose! Scissors beats Paper";
    }

    if (playerSelection == 'scissors' && computerSelection == 'rock'){
        result = "You Lose! Rock beats Scissors";
    } 

    if (playerSelection == null || undefined){
        alert("Try Again?");
    }

    else if(playerSelection == computerSelection){
        result = "It's a Tie!Play Again?";

    } else{
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
    } 
    return result;
 }


//This calls the functions defined earlier//


let playerSelection = prompt("Enter rock, paper or scissors");

let computerSelection = computerPlay();

console.log (oneRound(playerSelection,computerSelection));

/*const rockButton = document.querySelector('#Rock');
rockButton.addEventListener('click',oneRound('rock',computerSelection));

const paperButton = document.querySelector('#Paper');
paperButton.addEventListener('click',oneRound('paper',computerSelection));

const scissorButton = document.querySelector('#Scissors');
scissorButton.addEventListener('click',oneRound('scissors',computerSelection));*/


