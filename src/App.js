import React from 'react'
import './App.css';

import Header from './components/Header'
import Products from './components/Products'
import Checkout from './components/Checkout'

function App() {

  return (
    <>
        <Header />
          <div className="flex">
            <Products />
            <Checkout />
          </div>
    </>
  );
}

export default App;
