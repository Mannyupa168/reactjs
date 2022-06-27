import React, { useState, 
                createContext } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
// import Counter from './components/Counter/Counter';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const Context = createContext;

function App() {

  const [cart, setCart] = useState([])
  console.log(cart)

  return (
    <div className="App">

      <Context.Provider value = {{ cart, setCart }} >

        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path ='/' element = {<ItemListContainer label = 'Welcome to OMG - Shoes!' />} />
            <Route path ='/category/:categoryId' element = {<ItemListContainer label = 'Welcome to OMG - Shoes!' />} />
            <Route path ='/detail/:productId' element = {<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>

      </Context.Provider>

    </div>
  );
}

export default App;
