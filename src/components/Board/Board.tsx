import Column from "./Column/Column";
import "./Board.css";

const Board = () => {
  const board = [...Array(7).keys()].map((value) => (
    <Column></Column>
  ));
  return <div className="board">{board}</div>;
};

export default Board;
