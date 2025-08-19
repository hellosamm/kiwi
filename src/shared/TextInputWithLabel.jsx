import React from "react";

const TextInputWithLabel = ({ elementId, labelText, value, onChange, ref }) => {
  return (
    <>
      <label htmlFor={elementId}>{labelText}</label>
      <input
        id={elementId}
        type="text"
        value={value}
        onChange={onChange}
        ref={ref}
      />
    </>
  );
};

export default TextInputWithLabel;
