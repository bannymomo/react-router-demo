import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      React Router Demo
      <div className="list-group">
        <ul>
          <li>
            <NavLink className="navlink" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/service">
              Service
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
