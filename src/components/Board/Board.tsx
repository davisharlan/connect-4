import { useState } from "react";
import Column from "./Column/Column";
import "./Board.css";

const Board = () => {
  const [turn, setTurn] = useState(1);
  const [boardState, setBoardState] = useState<number[][]>(
    Array(7)
      .fill(0)
      .map(() => Array(6).fill(0))
  );

  // TODO: I need to refactor this crap
  const handleColumnClick = async (columnIndex: number) => {
    const applyMoveRes = await fetch("http://localhost:8081/applyMove", {
      method: "POST",
      body: JSON.stringify({
        move: columnIndex,
        boardState: { board: boardState, turn },
      }),
      headers: {
        Accept: "application/json",
      },
    }).then((res) => res.json());
    setBoardState(applyMoveRes.board);
    setTurn(applyMoveRes.turn);

    await new Promise((res) => setTimeout(res, 500));

    const res = await fetch("http://localhost:8081/random", {
      method: "POST",
      body: JSON.stringify({
        board: applyMoveRes.board,
        turn: applyMoveRes.turn,
      }),
      headers: {
        Accept: "application/json",
      },
    }).then((res) => res.json());
    setBoardState(res.board);
    setTurn(res.turn);

    if (res.winner) {
      // TODO: Add modal
      console.log(`Player ${res.winner} wins!`);
      setBoardState(
        Array(7)
          .fill(0)
          .map(() => Array(6).fill(0))
      );
    }
  };

  return (
    <div className="board">
      {[...Array(7).keys()].map((value) => (
        <Column
          columnIndex={value}
          key={value}
          columnState={boardState[value]}
          handleColumnClick={handleColumnClick}
        ></Column>
      ))}
    </div>
  );
};

export default Board;
