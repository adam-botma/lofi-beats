import React from 'react';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Header />
      <div className='row'>
        <div className='buttons'>
          <Button>Share</Button>
          <Button>Save</Button>
        </div>
        <div className='plugs'>
          <Plug></Plug>
          <Plug></Plug>
          <Plug></Plug>
          <Plug></Plug>
          <Plug></Plug>
        </div>
      </div>
      <div className='row'>
        <BeatHolder></BeatHolder>
        <BeatHolder></BeatHolder>
        <BeatHolder></BeatHolder>
      </div>
    </div>
  );
}


export default App;
