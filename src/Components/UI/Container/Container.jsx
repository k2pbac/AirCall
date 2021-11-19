import React from "react";

import "./Container.css";

const Container = (props) => {
  return (
    <div id={props.id} onClick={props.onClick} className="call_item__container">
      {props.children}
    </div>
  );
};

export default Container;
