import React from "react";

function Navbar({ cartCount }) {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>Amazon Clone</h2>
      <ul style={styles.navLinks}>
        <li>Home</li>
        <li>Products</li>
        <li>Cart ({cartCount})</li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: "#232f3e",
    color: "white",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: { margin: 0 },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "1rem",
    margin: 0
  }
};

export default Navbar;
