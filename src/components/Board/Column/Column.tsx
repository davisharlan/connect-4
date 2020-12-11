import { useState } from "react";
import Cell from "../Cell/Cell";
import "./Column.css";

const fillUnoccupiedCellFromBottom = (arr: number[], turn: number) => {
  const level = arr.indexOf(0);
  return [
    ...arr.slice(0, level),
    turn + 1,
    ...arr.slice(level + 1, arr.length),
  ];
};

const Column = ({
  turn,
  setTurn,
  columnState,
  setColumnState,
}: {
  turn: number;
  setTurn: any;
  columnState: number[];
  setColumnState: any;
}) => {
  //const [columnState, setColumnState] = useState([0, 0, 0, 0, 0, 0]);
  debugger
  const column = [...Array(7).keys()]
    .reverse()
    .map((value) => <Cell cellState={columnState[value]}></Cell>);

  return (
    <div
      className="column"
      onClick={() => {
        setColumnState(fillUnoccupiedCellFromBottom(columnState, turn));
        setTurn((turn + 1) % 2);
      }}
    >
      {column}
    </div>
  );
};

export default Column;
