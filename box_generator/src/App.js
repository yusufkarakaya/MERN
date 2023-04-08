import './App.css';
import React, { useState } from 'react';

function App() {
  const [boxes, setBoxes] = useState([]);
  const [color, setColor] = useState('');

  const createBox = (event) => {
    event.preventDefault();

    const boxStyle = {
      backgroundColor: color,
      height: '200px',
      width: '200px',
      border: '1px solid black',
      display: 'inline-block',
    };

    const newBox = <div key={boxes.length} style={boxStyle}></div>;
    setBoxes([...boxes, newBox]);
  };

  return (
    <div className='App'>
      <div>
        <form onSubmit={createBox}>
          <label>Color:</label>
          <input
            type='text'
            onChange={(event) => setColor(event.target.value)}
          />
          <input type='submit' value='Add' />
        </form>
      </div>
      <div className='main-box'>
        <div>{boxes}</div>
      </div>
    </div>
  );
}

export default App;
