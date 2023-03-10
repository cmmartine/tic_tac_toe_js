import { gameStatus } from "./win-loss-status.js";

const gameBoard = (function() {
  'use strict';

  let boardSpots = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const newBoardBtn = document.getElementById('new-game');
  newBoardBtn.addEventListener('click', resetBoard);
  const placePieces = document.querySelectorAll('.piece-position');
  const player1 = createPlayer('player1', 'X');
  const player2 = createPlayer('player2', 'O');
  let currentPlayer = player1;
  const currentPlayerDiv = document.getElementById('current-player');

  function createPlayer(name, piece) {
    return {
      name: name,
      piece: piece
    };
  }

  function switchCurrentPlayer(current) {
    switchPlayerHTML(current)
    if (current === player1) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
  }

  function switchPlayerHTML(current) {
    if (current === player1) {
      currentPlayerDiv.classList.remove('player-one');
      currentPlayerDiv.classList.add('player-two');
      currentPlayerDiv.innerText = "Player Two's Turn: O";
    } else {
      currentPlayerDiv.classList.remove('player-two');
      currentPlayerDiv.classList.add('player-one');
      currentPlayerDiv.innerText = "Player One's Turn: X";
    }
  }

  function resetBoard(e) {
    boardSpots.splice(0, 9);
    boardSpots.push(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const changeSpots = document.querySelectorAll('.piece-position-taken')
    changeSpots.forEach((spot) => {
      spot.classList.add('piece-position');
      spot.classList.remove('piece-position-taken');
      spot.classList.remove('unclickable');
      spot.innerText = " ";
    });
    const spots = document.querySelectorAll('.piece-position')
    spots.forEach((spot) => {
      spot.classList.remove('unclickable');
    });
    switchCurrentPlayer(currentPlayer);
  }

  (function assignPlacing() {
    placePieces.forEach((current) => {
      current.addEventListener('click', placePiece);
    });
  })();

  function placePiece(e) {
    if (boardSpots[e.target.dataset.index] === 0) {
      boardSpots[e.target.dataset.index] = currentPlayer.piece;
      changePieceColor(e.target);
      e.target.innerText = currentPlayer.piece;
      e.target.classList.add('piece-position-taken')
      e.target.classList.remove('piece-position')
      if (gameStatus.checkStatus(boardSpots, currentPlayer)) {
        endGame();
      } else {
        switchCurrentPlayer(currentPlayer);
      }
    } else {
      console.log("cannot place");
    }
  }

  function changePieceColor(position) {
    if (currentPlayer === player1) {
      position.classList.add('player-one');
      position.classList.remove('player-two');
    } else {
      position.classList.add('player-two');
      position.classList.remove('player-one');
    }
  }

  function endGame() {
    gameStatus.resetStatus();
    placePieces.forEach((spot) => {
        spot.classList.add('unclickable');
    });
  }

  return {
    boardSpots: boardSpots, currentPlayer: currentPlayer
  }

 })();
 