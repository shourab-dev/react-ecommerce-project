import React from "react";

const Errors = ({ error, touch }) => {
  return <>{error && touch && <p className="text-danger">{error}</p>}</>;
};

export default Errors;
