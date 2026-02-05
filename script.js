let maxScore = 50000;
let player = Math.floor(Math.random() * 2) + 1;
let counter = 5;

function rollDice() {
  const roll = document.getElementById('roll');
  const p1 = document.getElementById('player1');
  const p2 = document.getElementById('player2');
  roll.addEventListener('click', () => {
    let d1 = Math.floor(Math.random() * 6) + 1;
    let d2 = Math.floor(Math.random() * 6) + 1;
    document.getElementById('dice1Img').src = 'images/d' + d1 + '.png';
    document.getElementById('dice2Img').src = 'images/d' + d2 + '.png';
    if (player === 1) {
      let cScore = p1.querySelector('#currentScore');
      let score = p1.querySelector('#score');
      let value = Number(score.innerHTML) + d1 + d2;
      score.innerHTML = value;
      cScore.innerHTML = d1 + d2;
      if (score.innerHTML >= 50) {
        alert('PLAYER 1 WON ');
        document.getElementById('roll').disabled = true;
      }
      counter -= 1;
      if (counter === 0 || d1 === d2) {
        cScore.innerHTML = 0;
        player = 2;
        counter = 5;
      }
    } else {
      let cScore = p2.querySelector('#currentScore');
      let score = p2.querySelector('#score');
      let value = Number(score.innerHTML) + d1 + d2;
      score.innerHTML = value;
      cScore.innerHTML = d1 + d2;
      if (score.innerHTML >= 50) {
        alert('PLAYER 2 WON ');
        document.getElementById('roll').disabled = true;
      }
      counter -= 1;
      if (counter === 0 || d1 === d2) {
        cScore.innerHTML = 0;
        player = 1;
        counter = 5;
      }
    }
  });
}

function hold() {
  const hold = document.getElementById('hold');
  const p1 = document.getElementById('player1');
  const p2 = document.getElementById('player2');
  hold.addEventListener('click', () => {
    if (player === 1) {
      let cScore = p1.querySelector('#currentScore');
      cScore.innerHTML = 0;
      player = 2;
      counter = 5;
    } else {
      let cScore = p2.querySelector('#currentScore');
      cScore.innerHTML = 0;
      player = 1;
      counter = 5;
    }
  });
}

function reset() {
  const reset = document.getElementById('new-game');
  reset.addEventListener('click', () => {
    window.location.reload();
  });
}

function playGame() {
  rollDice();
  hold();
  reset();
}

playGame();
