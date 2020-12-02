import Cell from "../Cell/Cell";
import "./Board.css";

const Board = () => {
  const column = [...Array(6).keys()].map((value) => <Cell></Cell>);
  const board = [...Array(7).keys()].map((value) => (
    <div id={value.toString()} className="column">
      {column}
    </div>
  ));
  return <div className="board">{board}</div>;
};

export default Board;
