import React, { useState } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <NavBar /> */}
      {/* <div>
        <button onClick={() => setPage('list')}>List</button>
        <button onClick={() => setPage('detail')}>Detail</button>
      </div>
      {page === 'list' && <ItemListContainer label = 'Welcome to OMG - Shoes!' />}
      {page === 'detail' && <ItemDetailContainer/>} */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path ='/' element = {<ItemListContainer label = 'Welcome to OMG - Shoes!' />} />
          <Route path ='/category/:categoryId' element = {<ItemListContainer label = 'Welcome to OMG - Shoes!' />} />
          <Route path ='/detail/:productId' element = {<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
