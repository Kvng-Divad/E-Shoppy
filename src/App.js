import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Login from './routes/Login';
import Product from './routes/Product';
import ProductList from './routes/ProductList';
import Register from './routes/Register';

function App() {
  return (

    <div className="body">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<ProductList/>} />
        <Route path='/product' element={<Product/>} />


        <Route path='/register' element={<Register/>} />
        <Route path='/sign-in' element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
