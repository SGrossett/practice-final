import React, {useState} from "react";
import {Square} from "./Square";

export function Board() {
  
  const [squares, setSquares] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    const squaresClone = squares.slice();
    if (squares[i] !== null){
      return;
    }
    squaresClone[i] = 'X';
    setSquares(squaresClone);

    const spaces = calculateSpaces(squaresClone)
    const cpu_move = chooseRandomSquare(spaces)

    squaresClone[cpu_move] = 'O';    
  }
  const renderSquare = (i) => {
    return <Square
      value={squares[i]}
      onClick={() => {
        handleClick(i) } }
    />;
  }
  const calculateSpaces = (list) => {
    let index = 0;
    let available_indexes = []
    for (const space of list) {
      if (space === null) {
        available_indexes.push(index)
      }
      index += 1;
    }
    return available_indexes;
  }
  const chooseRandomSquare = (list) => {
    return list[Math.floor(Math.random()*list.length)]
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else if(calculateSpaces(squares).length === 0) {
    status = "Wow you're awful, start over agagin"
  }
  else {
    status = 'Make Your Move';
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button className="rounded-lg bg-white mt-2" onClick={() => {
        setSquares(Array(9).fill(null))
      }}>
        Start New Game
      </button>
    </div>
  )
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 5, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}