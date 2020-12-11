import { useState } from "react";
import Column from "./Column/Column";
import "./Board.css";

const setColumnState = (setBoardState: any, index: number, boardState:any) => {
  const locBoard = [...boardState]
  return(
    (column: number[]) => {    
    setBoardState([
      ...locBoard.slice(0, index),
      column,
      ...locBoard.slice(index + 1, boardState.length)])
    }    
  )  
}

const Board = () => {
  const [turn, setTurn] = useState(0);
  const [boardState, setBoardState] = useState<number[][]>(Array(7).fill(0).map(x => Array(7).fill(0)))

  const board = [...Array(7).keys()].map((value) => (
    <Column
      turn={turn}
      setTurn={setTurn}
      columnState={boardState[value]}
      setColumnState={setColumnState(setBoardState, value, boardState)}
    ></Column>
  ));
  return <div className="board">{board}</div>;
};

export default Board;
