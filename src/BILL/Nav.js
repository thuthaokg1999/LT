import React from "react";
import "./../App.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="nav">
      <ul className="navItem">
        <Link to="/" className="navSubItem">
          <li className="deta">Home</li>
        </Link>
        <Link to="/bill" className="navSubItem">
          <li className="deta">Bill</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
