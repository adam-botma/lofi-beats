import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Loop = (props) => {
  return (
  <Draggable draggableId={props.loop.id} index={props.index}>
    {(provided) => (
        <div className='loop pop-out'
        {... provided.draggableProps}
        {... provided.dragHandleProps}
        ref={provided.innerRef}
        >{props.title}</div>
    )}
    </Draggable>
  )
}

export default Loop;
