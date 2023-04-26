import './App.css';
import Main from './components/Main/Main';
import DetailProduct from './components/DetailProduct/DetailProduct';
import Update from './components/UpdateProduct/Update';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/api' element={<Main />} />
        <Route path='/api/product/:id' element={<DetailProduct />} />
        <Route path='/api/update/:id' element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
