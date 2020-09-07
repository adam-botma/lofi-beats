import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';


const Plug = (props) => {

  const [, drop] = useDrop({
    accept: ItemTypes.LOOP,
    drop: (item) => props.onDropEnd(props.plug.title, item),
    collect: monitor => ({isOver: !!monitor.isOver(),
    }),
  })

return (
  <div ref={drop} className='push-in plug'></div>
)

}

export default Plug;
