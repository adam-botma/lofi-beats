import React from 'react';
import Loop from './Loop';
import { FaRecordVinyl } from 'react-icons/fa';


const LoopColumn = (props) => {
  return (
    <div className='loop-column'>
      {props.loops.map((loop, index) => {
        return <Loop key={loop.id} loop={loop} index={index} />
      })}
    </div>
  )
}

export default LoopColumn;
