import React from "react";

const Loader = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
