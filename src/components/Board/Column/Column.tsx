import Cell from "../Cell/Cell";
import "./Column.css";

const Column = ({
  columnIndex,
  columnState,
  handleColumnClick,
}: {
  columnIndex: number;
  columnState: number[];
  handleColumnClick: (arg0: number) => void;
}) => {
  const column = [...Array(6).keys()]
    .reverse()
    .map((value, index) => <Cell cellState={columnState[value]} key={index}></Cell>);

  const isColumnFull = () => columnState.find(elem => elem === 0) === undefined 
  
  return (
    <div
      className="column"
      onClick={isColumnFull() ? () => {} : () => {
        handleColumnClick(columnIndex);
      }}
    >
      {column}
    </div>
  );
};

export default Column;
