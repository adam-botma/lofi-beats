import React from 'react';
import { ItemTypes } from './ItemTypes';
import { DragPreviewImage, useDrag } from 'react-dnd';
import { GiCompactDisc, GiDrum, GiMusicalKeyboard } from 'react-icons/gi'


const Loop = (props) => {

  const loopType = (type)=> {
    switch(type){
      case 'bass':
      return <GiCompactDisc className='loop-icon' />
      break;
      case 'drum':
        return <GiDrum className='loop-icon'/>
        break;
      case 'melody':
        return <GiMusicalKeyboard className='loop-icon'/>

      default:
        return <div></div>
    }
  }

  const [{ isDragging }, drag ] = useDrag({
    item: {type: ItemTypes.LOOP},
    collect: (monitor)=> ({
      isDragging: !!monitor.isDragging()
    })
  })
  return (
  <div className='loop pop-out' ref={drag}>{loopType(props.loop.type)}</div>
  )
}

export default Loop;
