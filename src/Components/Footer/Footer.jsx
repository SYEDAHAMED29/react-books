import React from "react";
import "./footer.css";

function Footer() {
  const date = new Date();
  return (
    <footer>
      <p>Syed Ahamed @{date.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
