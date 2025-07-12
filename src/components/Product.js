import React from "react";

function Product({ product, onAddToCart }) {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.title} style={styles.img} />
      <h3>{product.title}</h3>
      <p>₹{product.price}</p>
      <button style={styles.button} onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "1rem",
    width: "200px",
    textAlign: "center",
    backgroundColor: "#f8f8f8"
  },
  img: {
    width: "100%",
    height: "150px",
    objectFit: "cover"
  },
  button: {
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#febd69",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold"
  }
};

export default Product;
