import React, { useState, createContext } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
// import Counter from './components/Counter/Counter';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '../src/context/CartContext'


function App() {

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path ='/' element = {<ItemListContainer label = 'Welcome to OMG - Shoes!' />} />
            <Route path ='/category/:categoryId' element = {<ItemListContainer label = 'Welcome to OMG - Shoes!' />} />
            <Route path ='/detail/:productId' element = {<ItemDetailContainer />} />
            <Route path='/cart' element={<h1>CART</h1>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
