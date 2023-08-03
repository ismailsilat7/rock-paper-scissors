
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
  console.log(outstring);
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


