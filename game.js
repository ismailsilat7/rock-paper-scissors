
//Query Selectors as global variables
const content = document.querySelector('.compChoice');
const roundNum = document.querySelector('.round');
const result = document.querySelector('.result');
const roundEnd = document.querySelector('.roundEnd');
const gameOver = document.querySelector('.gameOver');
const wins = document.querySelector('.wins');
const compWins = document.querySelector('.compWins');
const drawCount = document.querySelector('.drawCount');
const gameOutcome = document.querySelector('.outcome');
const playerChoice = document.querySelector('.player');
const compChoice = document.querySelector('.comp');
const selection = document.querySelector('.selection');

//Global Variables 
let computerSelection;
let playerSelection;
let playerWins = 0;
let draws = 0;
let computerWins = 0;
let outstring;
let num;
let round = 1;

//Event Listeners to check if a button is clicked
const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
  playerSelection = 'rock';
  play(playerSelection);
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
  playerSelection = 'paper';
  play(playerSelection);
});

const scissor = document.querySelector('.scissor');
scissor.addEventListener('click', () => {
  playerSelection = 'scissor';
  play(playerSelection);
});

const reset = document.querySelector('.restart');
reset.addEventListener('click', () => {
  restart();
})

//calls eachRound if condition is met
function play(playerSelection) {
  if (round <= 5) {
    eachRound(playerSelection);
    playerChoice.src = sourcestr(playerSelection);
    playerChoice.alt = playerSelection;
  }
};

// To get computer's choice
function getComputerChoice () {
  //generates a rand num between 1 & 3
  let num = Math.floor(Math.random() * (3)) + 1;
  let outstring;
  if (num === 1) {
    outstring = "Rock";
  } else if (num === 2) {
    outstring = "Paper";
  }
  else {
    outstring = "Scissor";
  }
  return outstring;
}


// to get result of each round
function playRound (playerSelection, computerSelection) {
  let num;
  // num = 0 is tie, num = 1 indicates that player won, num = -1 indicates that computer won.
  if (playerSelection === computerSelection) {
    num = 0;
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper"){
        num = -1;
    } else {
      num = 1;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissor") {
      num = -1;
    } else {
      num = 1;
    }
  } else {
    if (computerSelection === "rock") {
      num = -1;
    } else {
      num = 1;
    }
  }
  return num;
}


//plays each round and updates the global variable
function eachRound(playerSelection) {
  //get computer's choice
  computerSelection = getComputerChoice();
  if (round == 5) {
    roundNum.textContent = `Last Round`;
  } else {
    roundNum.textContent = `Round ${round}`;
  }

  compChoice.alt = computerSelection
  computerSelection = computerSelection.toLowerCase();
  compChoice.src = sourcestr(computerSelection)
  //getting result of round & getting output
  num = playRound(playerSelection, computerSelection);
  switch (num) {
    case 1:
      outstring = `You Win! ${playerSelection} beats ${computerSelection} :)`;
      playerWins++;
      wins.textContent = `Your Score : ${playerWins}`;
      break;
    case -1:
      outstring = `You Lose! ${computerSelection} beats ${playerSelection} :(`;
      computerWins++;
      compWins.textContent = `Computer's Score : ${computerWins}`;
      break;
    default:
      outstring = "It's a Draw";
      draws++;
      drawCount.textContent = `Draws : ${draws}`;
  }
  roundEnd.textContent = outstring;

  if (round >= 5) {
    let outcome;
    let audio;
    if (playerWins > computerWins) {
      outcome = "Congrats! You Win";
      audio = document.querySelector('.game-win');
    } else if (playerWins < computerWins) {
      outcome = "You Lose"
      audio = document.querySelector('.you-lose');
    } else {
      outcome = "This game is a draw";
      audio = document.querySelector('.game-over')
    }
    gameOutcome.textContent = outcome;
    audio.currentTime = 0;
    audio.play();
  }
  round++;
  console.log(round);
};

//to change source of image
function sourcestr(selection) {
  let outstring;
  if (selection == 'rock') {
    outstring = './img/rock-white.png';
  } else if (selection == 'paper') {
    outstring = './img/paper-white.png';
  } else if (selection == 'scissor') {
    outstring = './img/scissor-white.png';
  } else if (selection == 'user') {
    outstring = './img/user.png';
  } else if (selection == 'comp') {
    outstring = './img/comp.png';
  }
  return outstring;
}

//to reset all values when default
function restart() {
  roundNum.textContent = "Choose your weapon to get started";
  roundEnd.textContent = "";
  playerWins = 0;
  draws = 0;
  computerWins = 0;
  round = 1;
  wins.textContent = "Your Score : 0";
  compWins.textContent = "Computer's Score : 0";
  drawCount.textContent = "Draws : 0";
  gameOutcome.textContent = "";
  playerChoice.src = sourcestr('user');
  playerChoice.alt = 'user';
  compChoice.src = sourcestr('comp');
  playerChoice.alt = 'comp'
}

selection.addEventListener('click', () => {
  if (round <= 5) {
  const audio = document.querySelector('.tink');
  audio.currentTime = 0;
  audio.play();
  }
});

