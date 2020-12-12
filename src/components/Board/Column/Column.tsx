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
  find4
}: {
  turn: number;
  setTurn: any;
  columnState: number[];
  setColumnState: any;
  find4: any;
}) => {
  const column = [...Array(7).keys()]
    .reverse()
    .map((value) => <Cell cellState={columnState[value]}></Cell>);

  return (
    <div
      className="column"
      onClick={() => {
        setColumnState(fillUnoccupiedCellFromBottom(columnState, turn));
        setTurn((turn + 1) % 2);
        find4()
      }}
    >
      {column}
    </div>
  );
};

export default Column;
