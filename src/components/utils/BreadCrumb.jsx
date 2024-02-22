import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BreadCrumb = ({title = ''}) => {
  return (
    <BreadCrumbWrapper>
      <div className="container text-center">
        <h2>{title}</h2>
        <p>
          <Link className="text-primary" to="/">
            Home
          </Link>{" "}
          / <span>{title}</span>
        </p>
      </div>
    </BreadCrumbWrapper>
  );
};

const BreadCrumbWrapper = styled.section`
  height: 200px;
  place-items: center;
  display: grid;
  .text-primary{
    color: var(--primaryColor) !important;
  }
  border: 1px solid #eee;

`;

export default BreadCrumb;
