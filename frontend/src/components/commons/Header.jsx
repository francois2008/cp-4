import React from "react";
import Logo from "../../assets/logo-vinyl.png";
import "../../styles/header.css";

function Header() {
  return (
    <div className="logo-name">
      <img className="logo" src={Logo} alt="logo" />
      <h1 className="name">VINYLS FEVER</h1>
    </div>
  );
}

export default Header;
