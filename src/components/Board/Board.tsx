import { useState } from "react";
import Column from "./Column/Column";
import "./Board.css";

const Board = () => {
  const [turn, setTurn] = useState(0)
  const board = [...Array(7).keys()].map((value) => <Column turn={turn} setTurn={setTurn}></Column>);
  return <div className="board">{board}</div>;
};

export default Board;
