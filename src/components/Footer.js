import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Amazon Clone. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "2rem",
    padding: "1rem",
    backgroundColor: "#232f3e",
    color: "white",
    textAlign: "center"
  }
};

export default Footer;
