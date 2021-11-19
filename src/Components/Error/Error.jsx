import React from "react";

import "./Error.css";

const Error = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50%",
      }}
    >
      <h1 style={{ fontSize: "1.2rem" }}>404 Page Not Found</h1>
    </div>
  );
};

export default Error;
