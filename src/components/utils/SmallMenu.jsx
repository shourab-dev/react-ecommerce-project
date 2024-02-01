import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

const SmallMenu = ({ targetId }) => {
  const authUserToken = useSelector((state) => state.auth.token);
  const authUser = useSelector((state) => state.auth.user);
  return (
    <div
      className="offcanvas offcanvas-start d-lg-none"
      id={targetId}
      aria-labelledby="offcanvasExampleLabel"
    >
      <div className="offcanvas-header">
        <NavLink to="/">
          <img src="/assets/img/logo.png" height="30px" alt="" />
        </NavLink>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body px-0">
        <ul className="px-3 smallMenuList">
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
              <NavLink className="nav-link authUserLink" to="/login">
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
    </div>
  );
};

export default SmallMenu;
