import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const AuthWrapper = () => {
  return (
    <AuthWrapperSection>
      <div className="cardWrapper">
          <Outlet />
      </div>
    </AuthWrapperSection>
  );
};

const AuthWrapperSection = styled.section`
  height: 80vh;
  display: grid;
  place-items: center;
  .cardWrapper {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 30px;
    width: 100%;
    max-width: 350px;
    border-radius: 10px;
  }
  h5 {
    margin-bottom: 15px;
  }
  input:focus {
    outline: none;
    box-shadow: none;
  }
  .text-primary {
    font-weight: 500;
    color: #555 !important;
    transition: 0.15s;
  }
  .text-primary:hover {
    color: var(--primaryColor) !important    ;
  }
  button div.spinner-border {
    width: 20px;
    height: 20px;
  }
`;

export default AuthWrapper;
