import React from 'react';
import Loop from './Loop';
import { Droppable } from 'react-beautiful-dnd';
import { FaRecordVinyl } from 'react-icons/fa';


const LoopColumn = (props) => {
  console.log(props.loops)
  return (
    <Droppable droppableId={props.column.id}>
      {(provided)=> (
        <div className='loop-column' ref={provided.innerRef} {...provided.droppableProps}>
          {props.loops.map((loop, index) => {
            return <Loop key={loop.id} loop={loop} index={index}/>
          })}
          {provided.placeholder}
        </div>
      )}

    </Droppable>
  )
}

export default LoopColumn;
