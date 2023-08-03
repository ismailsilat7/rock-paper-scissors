
function getComputerChoice () {
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

function game() {
  let playerWins = 0;
  let draws = 0;
  let computerWins = 0;
  let playerSelection = "ball";
  let computerSelection;
  let outstring;
  let num;
  let playerChoice;
  let computerChoice;
  let numRound;
  for (let round = 0; round < 5; round++) {
    numRound = `Round Number ${round + 1}`;
    console.log(numRound);

    while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissor") {
      playerSelection = prompt("Please enter your choice").toLowerCase();
    }

    computerSelection = getComputerChoice().toLowerCase();

    playerChoice = `Your Choice : ${playerSelection}`;
    console.log(playerChoice);

    computerChoice = `Computer's Choice : ${computerSelection}`;
    console.log(computerChoice);

    num = playRound(playerSelection, computerSelection);

    switch (num) {
      case 1:
        outstring = `You Win! ${playerSelection} beats ${computerSelection} :)`;
        playerWins++;
        break;
      case -1:
        outstring = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerWins++;
        break;
      default:
        outstring = "It's a Draw";
        draws++;
    }

    playerSelection = "ball";
    console.log(outstring);
  }

  console.log ("GAME OVER!")
  let score;
  score = `Your Score : ${playerWins}`;
  console.log(score);
  score = `Computer's Score : ${computerWins}`;
  console.log(score);
  score = `Draws : ${draws}`;
  console.log(score);
  let result;
  if (playerWins > computerWins) {
    result = "Congrats! You Win"
  } else if (playerWins < computerWins) {
    result = "You Lose"
  } else {
    result = "This game is a draw"
  }
  console.log(result);
}

game();
