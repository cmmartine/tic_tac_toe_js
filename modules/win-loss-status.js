export { gameStatus };

const gameStatus = (function() {
  'use strict';

  const currentPlayerDiv = document.getElementById('current-player');
  let winStatus = false;

  function checkStatus(boardSpots, currentPlayer) {
    horizontalWin(boardSpots, currentPlayer);
    verticalWin(boardSpots, currentPlayer);
    diagonalWin(boardSpots, currentPlayer);
    tieGame(boardSpots);
    return winStatus;
  }

  function horizontalWin(boardSpots, currentPlayer) {
    if ((boardSpots[0] === 'O' && boardSpots[1] === 'O' && boardSpots[2] === 'O') || (boardSpots[0] === 'X' && boardSpots[1] === 'X' && boardSpots[2] === 'X')) {
      gameWasWon(currentPlayer);
    } else if ((boardSpots[3] === 'O' && boardSpots[4] === 'O' && boardSpots[5] === 'O') || (boardSpots[3] === 'X' && boardSpots[4] === 'X' && boardSpots[5] === 'X')){
      gameWasWon(currentPlayer);
    } else if ((boardSpots[6] === 'O' && boardSpots[7] === 'O' && boardSpots[8] === 'O') || (boardSpots[6] === 'X' && boardSpots[7] === 'X' && boardSpots[8] === 'X')){
      gameWasWon(currentPlayer);
    }
  }

  function verticalWin(boardSpots, currentPlayer) {
    if ((boardSpots[0] === 'O' && boardSpots[3] === 'O' && boardSpots[6] === 'O') || (boardSpots[0] === 'X' && boardSpots[3] === 'X' && boardSpots[6] === 'X')) {
      gameWasWon(currentPlayer);
    } else if ((boardSpots[1] === 'O' && boardSpots[4] === 'O' && boardSpots[7] === 'O') || (boardSpots[1] === 'X' && boardSpots[4] === 'X' && boardSpots[7] === 'X')){
      gameWasWon(currentPlayer);
    } else if ((boardSpots[2] === 'O' && boardSpots[5] === 'O' && boardSpots[8] === 'O') || (boardSpots[2] === 'X' && boardSpots[5] === 'X' && boardSpots[8] === 'X')){
      gameWasWon(currentPlayer);
    }
  }

  function diagonalWin(boardSpots, currentPlayer) {
    if ((boardSpots[0] === 'O' && boardSpots[4] === 'O' && boardSpots[8] === 'O') || (boardSpots[0] === 'X' && boardSpots[4] === 'X' && boardSpots[8] === 'X')) {
      gameWasWon(currentPlayer);
    } else if ((boardSpots[2] === 'O' && boardSpots[4] === 'O' && boardSpots[6] === 'O') || (boardSpots[2] === 'X' && boardSpots[4] === 'X' && boardSpots[6] === 'X')){
      gameWasWon(currentPlayer);
    }
  }

  function tieGame(boardSpots) {
    if (!boardSpots.includes(0)) {
      winStatus = true;
      gameIsATie();
    }
  }

  function gameWasWon(currentPlayer){
    winStatus = true;
    if (currentPlayer.name === 'player1') {
      currentPlayerDiv.innerText = "Player One Wins!";
    } else {
      currentPlayerDiv.innerText = "Player Two Wins!";
    }
  }

  function gameIsATie() {
    currentPlayerDiv.classList.remove('player-one');
    currentPlayerDiv.classList.remove('player-two');
    currentPlayerDiv.innerText = "Tie Game!";
  }

  function resetStatus() {
    winStatus = false;
  }

  return { checkStatus: checkStatus, resetStatus: resetStatus }

}());
