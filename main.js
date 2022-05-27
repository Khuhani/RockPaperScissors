const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const buttons = document.querySelectorAll('button');


buttons.forEach (button => button.addEventListener('click',
(e) => {playerChoice = e.target.id;
        playerChoiceDisplay.innerHTML = playerChoice;
        computerPlay();
        playRound(playerChoice,computerChoice);}))

function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3);
    if(randomNumber == 1){
        computerChoice = 'rock';
    }
    if(randomNumber == 2){
        computerChoice = 'paper';
    }
    if(randomNumber == 3){
        computerChoice = 'scissors';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function playRound(){
    if (playerChoice == 'rock' && computerChoice == 'scissors'||
        playerChoice == 'paper' && computerChoice == 'rock'||
        playerChoice == 'scissors' && computerChoice == 'paper'){
            result = `You Win! ${playerChoice} beats ${computerChoice}`;
        }
    else if(playerChoice == computerChoice){
        result = "It's a tie!";
    }
    else{
        result = `You Lose ${computerChoice} beats ${playerChoice}`;
    }
    resultDisplay.innerHTML = result;
}

//var playerChoice = prompt('Enter rock, paper or scissors').toLowerCase();
let playerWinRound = `You Win! ${playerChoice} beats ${computerChoice}`;
let computerWinRound = `You Lose ${computerChoice} beats ${playerChoice}`;
let Draw = "It's a tie!";










