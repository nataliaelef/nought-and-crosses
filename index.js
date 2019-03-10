let player = 'player1';

const boxes = document.getElementsByClassName('grid-item');
const boxesArr = [...boxes];

const topRow = [...document.getElementsByClassName('top')];
const midRow = [...document.getElementsByClassName('midRow')];
const bottom = [...document.getElementsByClassName('bottom')];
const colLeft = [...document.getElementsByClassName('colLeft')];
const colMid = [...document.getElementsByClassName('colMid')];
const colRight = [...document.getElementsByClassName('colRight')];
const diag1 = [...document.getElementsByClassName('diag1')];
const diag2 = [...document.getElementsByClassName('diag2')];

const winCombos = [
  topRow,
  midRow,
  bottom,
  colLeft,
  colMid,
  colRight,
  diag1,
  diag2
];

boxesArr.forEach(box => {
  box.addEventListener('click', event => {
    if (!box.id && player === 'player1') {
      const imageX = document.createElement('img');
      imageX.src = './images/cross.png';
      event.preventDefault();
      box.appendChild(imageX);
      box.id = 'X';
      player = 'player2';
    } else if (!box.id && player === 'player2') {
      const imageO = document.createElement('img');
      imageO.src = './images/nought.png';
      event.preventDefault();
      box.appendChild(imageO);
      box.id = 'O';
      player = 'player1';
    }
    checkWinner(box.id);
  });
});

function checkWinner(id) {
  winCombos.forEach(combo => {
    if (combo[0].id === id && combo[1].id === id && combo[2].id === id) {
      console.log(id);
      alert('WINNER');
    }
  });
}

function restartGame() {
  const squares = document.getElementsByClassName('grid-item');
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].firstChild) {
      squares[i].removeChild(squares[i].firstChild);
    }
    squares[i].id = '';
  }
}
