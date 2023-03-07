const gameBoard = (function() {
  'use strict';
 
 
  let boardSpots = [0, 0, 0, 0, 0, 0, 0, 0, 0];
 
 
  let currentPlayer = 'X';
 
 
  const newBoardBtn = document.getElementById('new-game');
  newBoardBtn.addEventListener('click', resetBoard);
 
 
  function resetBoard(e) {
    boardSpots.splice(0, 9);
    boardSpots.push(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const changeSpots = document.querySelectorAll('.piece-position-taken')
    changeSpots.forEach((spot) => {
      spot.classList.add('piece-position');
      spot.classList.remove('piece-position-taken');
    });
    const spots = document.querySelectorAll('.piece-position')
    spots.forEach((spot) => {
      spot.innerText = " ";
    });
  }
 
 
  (function assignPlacing() {
    const placePieces = document.querySelectorAll('.piece-position');
    placePieces.forEach((current) => {
      current.addEventListener('click', placePiece);
    });
  })();
 
 
  function placePiece(e) {
    if (boardSpots[e.target.dataset.index] === 0) {
      boardSpots[e.target.dataset.index] = currentPlayer;
      e.target.innerText = currentPlayer;
      e.target.classList.add('piece-position-taken')
      e.target.classList.remove('piece-position')
    } else {
      console.log("cannot place");
    }
  }
 
 
  return {
    boardSpots: boardSpots
  };
 
 
 })();
 