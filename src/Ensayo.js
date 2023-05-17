import React from "react";

const Ensayo = ({ selectedValue }) => {
  return (
    <h2
      style={{
        color: "white",
        textAlign: "center",
        fontSize: "3rem",
      }}
    >
      {selectedValue}
    </h2>
  );
};

export default Ensayo;
