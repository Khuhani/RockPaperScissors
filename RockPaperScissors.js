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
 let play = computerPlay();
 console.log (play);
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

 function oneRound(playerSelection, computerSelection){
    if (playerSelection == "rock" && computerSelection == "paper") {
        result = "You Lose! Paper Beats Rock";
 }
    if (playerSelection == 'paper' && computerSelection == 'scissors') {
        result = "You Lose! Scissors beats Paper";
    }
    if (playerSelection == 'scissors' && computerSelection == 'rock'){
        result = "You Lose! Rock beats Scissors";
    } else{
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    return result;
 }

 let playerSelection = "rock";
 let computerSelection = computerPlay();
 console.log(oneRound(playerSelection, computerSelection));
 


