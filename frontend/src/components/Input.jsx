import React from "react";

const Input = ({ type, placeholder, name, value, onChange }) => {
  return (
    <>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};

export default Input;
