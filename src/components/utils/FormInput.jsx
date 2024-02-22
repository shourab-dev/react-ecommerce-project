import React from "react";

const FormInput = ({
  type = "text",
  placeholder = "Enter you ....",
  classNames = null,
  name = "",
  handleChange,
  handleBlur,
  value
}) => {
  return (
    <>
      <input
      value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        name={name}
        type={type}
        className={`form-control ${classNames}`}
        placeholder={placeholder}
      />
    </>
  );
};

export default FormInput;
