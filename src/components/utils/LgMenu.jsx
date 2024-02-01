import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const LgMenu = () => {
  const authUserToken = useSelector((state) => state.auth.token);
  const authUser = useSelector((state) => state.auth.user);
  return (
    <div className="collapse menu navbar-collapse" id="navbarLg">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
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
        <li>
          {authUserToken ? (
            <NavLink className="nav-link authUserLink" to="/logout">
              {authUser.email} (Logout)
            </NavLink>
          ) : (
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          )}
        </li>
      </ul>
    </div>
  );
};

export default LgMenu;
