import './App.css';
import React from 'react';
import Main from './components/Main/Main';
import CreateAuthor from './components/CreateAuthor/CreateAuthor';
import UpdateAuthor from './components/UpdateAuthor/UpdateAuthor';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/new' element={<CreateAuthor />} />
          <Route path='/edit/:id' element={<UpdateAuthor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
