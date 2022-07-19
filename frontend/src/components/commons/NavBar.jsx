import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

function NavBar() {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/playlist">PLAYLIST</Link>
        </li>
        <li>
          <Link to="/myaccount">MY ACCOUNT</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
