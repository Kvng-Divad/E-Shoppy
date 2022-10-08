import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Product from './routes/Product';
import ProductList from './routes/ProductList';

function App() {
  return (

    <div className="body">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<ProductList/>} />
        <Route path='/product' element={<Product/>} />
      </Routes>
    </div>
  );
}

export default App;
