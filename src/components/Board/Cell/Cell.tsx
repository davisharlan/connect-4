import "./Cell.css";

const getCellCircle = (cellState: number) => {
  switch (cellState) {
    case 1:
      return <div className="cell-circle-red"></div>;
    case 2:
      return <div className="cell-circle-black"></div>;
    default:
      return <div className="cell-circle-white"></div>;
  }
};

const Cell = ({ cellState }: { cellState: number }) => {
  return <div className="cell-container">{getCellCircle(cellState)}</div>;
};

export default Cell;
