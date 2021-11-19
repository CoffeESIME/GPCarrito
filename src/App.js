import React from "react";
import "./App.css";

import Header from "./components/Header";
import Products from "./components/Products";
import Checkout from "./components/Checkout";
//estado global
import ProductsState from "./context/ProductsState";
//En la funcion englobamos los componentes dentro del estado global
//para pasarles los datos a cada uno de ellos
function App() {
  return (
    <>
      <ProductsState>
        <Header />
        <div className="flex">
          <Products />
          <Checkout />
        </div>
      </ProductsState>
    </>
  );
}

export default App;
