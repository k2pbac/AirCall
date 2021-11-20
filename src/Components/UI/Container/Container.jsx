import React from "react";

import "./Container.css";

const Container = (props) => {
  return (
    <div
      id={props.id}
      onClick={props.onClick}
      className={`call_item__container ${
        props.className.length ? props.className : "container_hide_drawer"
      }`}
    >
      {props.children}
    </div>
  );
};

export default Container;
