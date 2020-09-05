import React from 'react';
import './App.css';
import Header from './Components/Header';
import Button from './Components/Button';
import Plug from './Components/Plug';
import LoopColumn from './Components/LoopColumn';
import { FiHeadphones } from 'react-icons/fi';
import { IoMdPlay, IoMdPause } from 'react-icons/io';
import { FaRandom } from 'react-icons/fa';

function App() {
  return (
    <div className='container'>
      <Header />
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
              <Plug></Plug>
              <Plug></Plug>
              <Plug></Plug>
              <Plug></Plug>
              <Plug></Plug>
            </div>
          </div>
        </div>
        <div className='loops-container'>
          <LoopColumn />
          <LoopColumn />
          <LoopColumn />
          <LoopColumn />
          <LoopColumn />
          <LoopColumn />

        </div>
      </div>
    </div>
  );
}


export default App;
