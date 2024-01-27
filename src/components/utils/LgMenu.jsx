import React from "react";
import { NavLink } from "react-router-dom";
const LgMenu = () => {
  return (
    <div className="collapse menu navbar-collapse" id="navbarLg">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/shop">
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default LgMenu;
