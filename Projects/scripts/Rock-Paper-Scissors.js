let scores = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreBoard();

let isAutoPlaying = false;
let intervalId;

function autoplay(){ 
  if(!isAutoPlaying){
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000)
    isAutoPlaying = true;
  } 
  
  else{
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}


document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('Rock');
  });

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('Paper');
  });

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('Scissors');
  });

document.body.addEventListener('keydown', (event) => {
  if(event.key === 'r'){
    playGame('Rock');
  } else if(event.key === 'p'){
    playGame('Paper');
  } else if(event.key === 's'){
    playGame('Scissors');
  }
});

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";
  if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie";
    } else if (computerMove === "Paper") {
      result = "You lose";
    } else if (computerMove === "Scissors") {
      result = "You win";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "You win";
    } else if (computerMove === "Paper") {
      result = "Tie";
    } else if (computerMove === "Scissors") {
      result = "You lose";
    }
  } else if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = "You lose";
    } else if (computerMove === "Paper") {
      result = "You win";
    } else if (computerMove === "Scissors") {
      result = "Tie";
    }
  }

  if (result === "You win") {
    scores.wins += 1;
  } else if (result === "You lose") {
    scores.losses += 1;
  } else if (result === "Tie") {
    scores.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(scores));
  updateScoreBoard();

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(
    ".js-moves"
  ).innerHTML = `You: <img class="move-icon" src="Emojis/${playerMove}-emoji.png"> 
    <img class="move-icon" src="Emojis/${computerMove}-emoji.png"> Computer`;
}

function updateScoreBoard() {
  document.querySelector(
    ".js-scores"
  ).innerHTML = `Wins: ${scores.wins}, Losses: ${scores.losses}, Ties: ${scores.ties}`;
}

function pickComputerMove() {
  const randomnumber = Math.random();
  let computerMove = "";

  if (randomnumber >= 0 && randomnumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomnumber >= 1 / 3 && randomnumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomnumber >= 2 / 3 && randomnumber < 1) {
    computerMove = "Scissors";
  }
  return computerMove;
}
