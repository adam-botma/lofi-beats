import React from 'react';
import { ItemTypes } from './ItemTypes';
import { DragPreviewImage, useDrag } from 'react-dnd';


const Loop = (props) => {

  const [{ isDragging }, drag ] = useDrag({
    item: {type: ItemTypes.LOOP},
    collect: (monitor)=> ({
      isDragging: !!monitor.isDragging()
    })
  })
  return (
  <div className='loop pop-out' ref={drag}>{props.title}</div>
  )
}

export default Loop;
