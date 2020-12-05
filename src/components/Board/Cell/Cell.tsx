import { useState } from 'react';
import './Cell.css';

const Cell = () => {
  const [cellState, setCellState] = useState(0);

  const getCellCircle = () => {
    console.log('hi')
    switch (cellState) {
      case 1: return <div className='cell-circle-red' onClick={() => setCellState((cellState + 1) % 3)}></div>
      case 2: return <div className='cell-circle-black' onClick={() => setCellState((cellState + 1) % 3)}></div>
      default: return <div className='cell-circle-white' onClick={() => setCellState((cellState + 1) % 3)}></div>
    }
  }

  return (
    <div className='cell-container'>
      {getCellCircle()}
    </div>
  )
};

export default Cell;
