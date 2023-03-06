import React from "react";

export const Input = ({
  otherStyles,
  placeholder,
  value,
  handleChange = (f) => f,
  disabled = false,
}) => {
  return (
    <input
      className={`bg-azalea p-[10px] rounded-[10px] text-mortar placeholder:text-mortar shadow-lg ${otherStyles}`}
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={handleChange}
      disabled={disabled}
    />
  );
};
