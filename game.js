// DOM Element Selection
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
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
const reset = document.querySelector('.restart');
const userName = document.querySelector('#name');
const submit = document.querySelector('.submit');
const player = document.querySelector('.playerChoice');

// Global Variables
let computerSelection;
let playerSelection;
let playerWins = 0;
let draws = 0;
let computerWins = 0;
let outstring;
let num;
let round = 1;

// Event Listeners
rock.addEventListener('click', () => {
  playerSelection = 'rock';
  play(playerSelection);
});

paper.addEventListener('click', () => {
  playerSelection = 'paper';
  play(playerSelection);
});

scissor.addEventListener('click', () => {
  playerSelection = 'scissor';
  play(playerSelection);
});

reset.addEventListener('click', () => {
  restart();
});

selection.addEventListener('click', () => {
  if (round <= 5) {
    playTink();
  }
});

// Function to play the game
function play(playerSelection) {
  if (round <= 5) {
    eachRound(playerSelection);
    playerChoice.src = sourcestr(playerSelection);
    playerChoice.alt = playerSelection;
  }
}

// Function to get computer's choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissor'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the result of each round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 0; // It's a draw
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissor') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissor' && computerSelection === 'paper')
  ) {
    return 1; // Player wins
  } else {
    return -1; // Computer wins
  }
}

// Function to play each round and update game state
function eachRound(playerSelection) {
  computerSelection = getComputerChoice();

  if (round === 5) {
    roundNum.textContent = 'Last Round';
  } else {
    roundNum.textContent = `Round ${round}`;
  }

  compChoice.alt = computerSelection;
  computerSelection = computerSelection.toLowerCase();
  compChoice.src = sourcestr(computerSelection);

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
      outcome = 'Congrats! You Win';
      audio = document.querySelector('.game-win');
    } else if (playerWins < computerWins) {
      outcome = 'You Lose';
      audio = document.querySelector('.you-lose');
    } else {
      outcome = 'This game is a draw';
      audio = document.querySelector('.game-over');
    }
    gameOutcome.textContent = outcome;
    audio.currentTime = 0;
    audio.play();
  }

  round++;
}

// Function to determine image source
function sourcestr(selection) {
  switch (selection) {
    case 'rock':
      return './img/rock-white.png';
    case 'paper':
      return './img/paper-white.png';
    case 'scissor':
      return './img/scissor-white.png';
    case 'user':
      return './img/user.png';
    case 'comp':
      return './img/comp.png';
    default:
      return '';
  }
}

// Function to reset the game
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
  compChoice.alt = 'comp';
}

submit.addEventListener('click', (e) => {
  e.preventDefault();
  player.textContent = userName.value.toUpperCase();
  playTink();
  scrollToGame();
});

function scrollToGame() {
  const target = document.getElementById('game');
  target.scrollIntoView({ behavior: 'smooth' });
}

// DOM Element Selection (Instructions Popup)
const instructionButton = document.querySelector('.instruction-button');
const instructionsPopup = document.getElementById('instructions-popup');
const closePopupButton = document.getElementById('close-popup');

// Event Listener to open the instructions popup
instructionButton.addEventListener('click', () => {
  instructionsPopup.style.display = 'flex';
  playTink();
});

// Event Listener to close the instructions popup
closePopupButton.addEventListener('click', () => {
  instructionsPopup.style.display = 'none';
});

// Function to play tink sound
function playTink() {
  const audio = document.querySelector('.tink');
  audio.currentTime = 0;
  audio.play();
}
