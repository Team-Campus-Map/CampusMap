import React from "react";

const TimetableInput = ({ htmlFor, labelText }) => {
  return (
    <>
      <br />
      <label htmlFor={htmlFor}>{labelText}</label>
    </>
  );
};

export default TimetableInput;
