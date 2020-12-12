import { useState } from "react";
import Column from "./Column/Column";
import "./Board.css";

const setColumnState = (setBoardState: any, index: number, boardState: any) => {
  return(
    (column: number[]) => {    
    setBoardState([
      ...boardState.slice(0, index),
      column,
      ...boardState.slice(index + 1, boardState.length)])
    }    
  )  
}

const find4 = (boardState: any) => {
  return(
    () => {
      let i = 0;
      let j = 0;
      for(i = 0; i < 7; i++){
        for(j = 0; j < 7; j++){
          if(boardState[i][j] !== 0){
            if(boardState[i + 1][j] === boardState[i][j]){
              if(find4helper(boardState, [i + 1, j], [1, 0], 1)){
                return true
              }
            }if(boardState[i][j + 1] === boardState[i][j]){
              if(find4helper(boardState, [i, j + 1], [0, 1], 1)){
                return true
              }
            }if(boardState[i + 1][j + 1] === boardState[i][j]){
              if(find4helper(boardState, [i + 1, j + 1], [1, 1],  1)){
                return true
              }
            }
          }
        }
      }
      return false
    }
  )
}

function find4helper(boardState: any, location: number[], direction: number[], count: number): boolean {
  if(count === 3){
    debugger
    return true
  }
  if(boardState[location[0]][location[1]] === boardState[location[0] + direction[0]][location[1] + direction[1]]){
   return find4helper(boardState, [location[0] + direction[0], location[1] + direction[1]], direction, count + 1)
  }
  else{
    return false
  }
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
      find4={find4(boardState)}
    ></Column>
  ))
  return <div className="board">{board}</div>;
};

export default Board;
