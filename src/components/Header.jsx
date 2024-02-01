import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { RiMenu3Fill } from "react-icons/ri";
import SmallMenu from "./utils/SmallMenu";
import LgMenu from "./utils/LgMenu";
const Header = () => {
  const [isMenuFix, setIsMenuFix] = useState(false);

  const menuFixed = () => {
    window.scrollY > 500 ? setIsMenuFix(true) : setIsMenuFix(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", menuFixed);
  }, []);

  return (
    <MyHeader>
      <nav
        className={`navbar navbar-expand-lg ${isMenuFix ? "menuFixed" : ""}`}
      >
        <div className="container">
          <NavLink to="/" className="logo">
            <img src="/assets/img/logo.png" alt="" />
          </NavLink>
          <button
            data-bs-toggle="offcanvas"
            data-bs-target="#smallMenu"
            className="menuToggler d-lg-none"
            type="button"
          >
            <RiMenu3Fill />
          </button>
          <SmallMenu targetId="smallMenu" />
          <LgMenu />
        </div>
      </nav>
    </MyHeader>
  );
};

const menuFixedAnimation = keyframes`
  from{
    transform: translateY(-100%);
  }
  to{
    transform: translateY(0%);

  }

`;

const MyHeader = styled.header`
  padding: 10px 0;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  .logo img {
    max-height: 35px;
    color: var(--primaryColor);
  }

  nav.menuFixed {
    position: fixed !important;
    width: 100%;
    background: white;
    top: 0;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    left: 0;
    z-index: 999999;
    animation: ${menuFixedAnimation} 0.3s linear forwards;
  }

  .menu ul li a {
    padding: 12px 20px !important;
    display: block;
    font-weight: 500;
    text-transform: uppercase;
  }
  .menu ul li a.active {
    background-color: var(--primaryColor);
    color: white;
    border-radius: 2px;
  }

  .menu ul li a.authUserLink {
    font-size: 12px;
    padding: 5px !important;
  }
  .menuToggler {
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 25px;
    border: 0;
    display: inline-block;
    padding: 0;
    background: var(--primaryColor);
    color: white;
    font-size: 1.5rem;
    font-weight: 800;
  }
  .smallMenuList li a {
    text-decoration: none;
    display: block;
    color: var(--secondaryColor);
    font-weight: 500;
    margin: 15px 0;
  }
  .smallMenuList li a.active {
    color: var(--primaryColor);
  }
`;

export default Header;
