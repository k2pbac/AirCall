import React from "react";

import "./CallItem.css";

const CallItem = () => {
  return (
    <div className="call_item">
      <span>Icon</span>
      <div className="call_item__details">
        <p>+33 6 45 13 53 91</p>
        <p>tried to call on Xavier</p>
      </div>
      <div className="call_item__time">
        <p>
          07:58 <span>pm</span>
        </p>
      </div>
    </div>
  );
};

export default CallItem;
