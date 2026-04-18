import { useState } from 'react';
import './TicTacToe.css';

const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function calculateWinner(cells) {
  return winningLines.reduce((winner, line) => {
    if (winner) return winner;
    const [a, b, c] = line;
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a];
    }
    return null;
  }, null);
}

function TicTacToe() {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(cells);

  const handleClick = (index) => {
    if (cells[index] || winner) return;
    const nextCells = [...cells];
    nextCells[index] = xIsNext ? 'X' : 'O';
    setCells(nextCells);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setCells(Array(9).fill(null));
    setXIsNext(true);
  };

  const status = winner
    ? `Winner: ${winner}`
    : cells.every(Boolean)
    ? 'Draw!'
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="tic-tac-toe">
      <div className="game-header">
        <h2>Tic Tac Toe</h2>
        <p>{status}</p>
      </div>

      <div className="board">
        {cells.map((value, index) => (
          <button key={index} className="square" onClick={() => handleClick(index)}>
            {value}
          </button>
        ))}
      </div>

      <button className="reset-button" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}

export default TicTacToe;
