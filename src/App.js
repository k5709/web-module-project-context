import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
// Contexts
import ProductContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext";

import Product from "./components/Product";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
    console.log(item);
  };
  return (
    <div className="App">
      <CartContext.Provider value={cart}>
        <Navigation />

        {/* Routes */}
        <ProductContext.Provider value={{ products, addItem }}>
          <Route exact path="/">
            <Products />
          </Route>

          <Route path="/cart">
            <ShoppingCart />
          </Route>
        </ProductContext.Provider>
      </CartContext.Provider>
    </div>
  );
}

export default App;
