import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import "./App.css";
import Product from "./components/Product";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <Navbar cartCount={cartItems.length} />
      <ProductList onAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} />
      <Footer />
    </div>
  );
}

export default App;
