import React from "react";

function Cart({ cartItems }) {
  return (
    <div style={styles.container}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul style={styles.list}>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.title} - ₹{item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem"
  },
  list: {
    listStyle: "none",
    padding: 0
  }
};

export default Cart;
