import React from "react";
import { Link } from "react-router-dom";
import "../../styles/log.css";

function Log() {
  return (
    <div>
      <ul className="log">
        <li className="list-log">
          <Link to="/signin">SIGN IN</Link>
        </li>
        <li className="list-log">
          <Link to="/login">LOG IN</Link>
        </li>
        <li className="list-log">
          <Link to="/logout">LOG OUT</Link>
        </li>
      </ul>
    </div>
  );
}

export default Log;
