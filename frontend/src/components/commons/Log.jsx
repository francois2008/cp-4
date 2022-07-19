import React from "react";
import { Link } from "react-router-dom";
import "../../styles/log.css";

function Log() {
  return (
    <div>
      <ul className="log">
        <li>
          <Link to="/signin">SIGN IN</Link>
        </li>
        <li>
          <Link to="/login">LOG IN</Link>
        </li>
        <li>
          <Link to="/logout">LOG OUT</Link>
        </li>
      </ul>
    </div>
  );
}

export default Log;
