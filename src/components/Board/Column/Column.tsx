import { useState } from "react";
import Cell from "../Cell/Cell";
import "./Column.css";

const fillUnoccupiedCellFromBottom = (arr: number[]) => {
  const level = arr.indexOf(0);
  return [
    ...arr.slice(0, level),
    (arr[level] + 1) % 3,
    ...arr.slice(level + 1, arr.length),
  ];
};

const Column = () => {
  const [columnState, setColumnState] = useState([0, 0, 0, 0, 0, 0]);
  const column = [...Array(6).keys()]
    .reverse()
    .map((value) => <Cell cellState={columnState[value]}></Cell>);

  return (
    <div
      className="column"
      onClick={() => setColumnState(fillUnoccupiedCellFromBottom(columnState))}
    >
      {column}
    </div>
  );
};

export default Column;
