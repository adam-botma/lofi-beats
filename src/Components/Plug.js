import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

const Plug = () => {
  const [, drop] = useDrop({
    accept: ItemTypes.LOOP,
    drop: () => console.log('we dropped baby!'),
    collect: monitor => ({isOver: !!monitor.isOver(),
    }),
  })

return (
  <div ref={drop} className='push-in plug'></div>
)

}

export default Plug;
