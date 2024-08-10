import React from "react";

const newDate = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright © {newDate}</p>
    </footer>
  );
}
export default Footer;
