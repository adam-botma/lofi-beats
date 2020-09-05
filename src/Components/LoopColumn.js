import React from 'react';
import Loop from './Loop';
import { FaRecordVinyl } from 'react-icons/fa';


const LoopColumn = () => {
  return (
    <div className='loop-column'>
      <Loop></Loop>
      <Loop></Loop>
      <Loop title={<FaRecordVinyl className='loop-title'/>}></Loop>
    </div>
  )
}

export default LoopColumn;
