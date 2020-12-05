import './Cell.css';

const Cell = ({ cellState }: { cellState: number }) => {

  const getCellCircle = () => {
    switch (cellState) {
      case 1: return <div className='cell-circle-red'></div>
      case 2: return <div className='cell-circle-black'></div>
      default: return <div className='cell-circle-white'></div>
    }
  }

  return (
    <div className='cell-container'>
      {getCellCircle()}
    </div>
  )
};

export default Cell;
