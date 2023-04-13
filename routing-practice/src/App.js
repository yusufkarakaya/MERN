import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';

const ParamsHandler = () => {
  const { word, color, bgColor } = useParams();

  return isNaN(word) ? (
    <h3 style={{ color: color, backgroundColor: bgColor }}>
      This is a word: {word}
    </h3>
  ) : (
    <h3>This is a number: {word}</h3>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='home' element={<Home />} />
          <Route path='/:word/:color?/:bgColor?' element={<ParamsHandler />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
