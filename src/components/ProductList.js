import React from "react";
import Product from "./Product";

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 1999,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    title: "Smartphone",
    price: 12999,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    title: "Laptop",
    price: 45999,
    image: "https://via.placeholder.com/150"
  }
];

function ProductList({ onAddToCart }) {
  return (
    <div style={styles.container}>
      {products.map((product) => (
        <Product key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    padding: "2rem",
    flexWrap: "wrap"
  }
};

export default ProductList;
