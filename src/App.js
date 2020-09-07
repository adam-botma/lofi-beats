import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Button from './Components/Button';
import Plug from './Components/Plug';
import LoopColumn from './Components/LoopColumn';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { FiHeadphones } from 'react-icons/fi';
import { IoMdPlay, IoMdPause } from 'react-icons/io';
import { FaRandom } from 'react-icons/fa';
import initialData from './data/initialData';

function App() {
  const [loops, setLoop] = useState(initialData.loops);
  const [columns, setColumn] = useState(initialData.columns);
  const [columnOrder, setColumnOrder] = useState(initialData.columnOrder);
  const [plugs, setPlug] = useState(initialData.plugs);

  const onDropEnd = (target, item) => {
    console.log(`dropped into ${target}`);
    console.log( `item that was dropped: ${item}`)

  }

  return (
    <div className='container'>
      <Header />
      <DndProvider backend={HTML5Backend}>
      <div className='board'>
        <div className='row'>
          <div className='buttons'>
            {/* <Button className='pop-out standard-button' title='Save' />
          <Button className='pop-out standard-button' title='Share' />*/}
          </div>
          <div className='side-container'>
            <div className='play-buttons'>
              <Button className='pop-out player-button' title={<FiHeadphones />} />
              <Button className='pop-out player-button' title={<IoMdPause />} />
              <Button className='pop-out player-button' title={<IoMdPlay />} />
              <Button className='pop-out player-button' title={<FaRandom />} />
            </div>
            <div className='plugs'>
                {plugs.map(plug => <Plug key={plug.title} plug={plug} onDropEnd={onDropEnd}></Plug> )}


            </div>
          </div>
        </div>
        <div className='loops-container'>
            {columnOrder.map(columnId => {
              const column = columns[columnId];
              const theLoops = column.loopIds.map(loopId => loops[loopId]);

              return <LoopColumn key={column.id} column={column} loops={theLoops} />
            })}

        </div>
      </div>
      </DndProvider>
    </div>
  );
}


export default App;
