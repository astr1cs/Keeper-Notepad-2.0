import React from "react";

const newDate = new Date().getFullYear();

function Footer() {
  return (
    <footer className="Footer ">
      <div className="footer-align"></div>
      <p>Copyright © {newDate}</p>
    </footer>
  );
}
export default Footer;
