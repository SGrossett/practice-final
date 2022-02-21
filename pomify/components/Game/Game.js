import React from "react";
import {Board} from "./Board";

export default function Game() {
  return (
    <div className="game flex flex-col items-center min-h-screen w-full justify-center">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
      </div>
    </div>
  )
}
