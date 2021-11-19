import React from "react";

import "./DateHeader.css";

const DateHeader = ({ date }) => {
  return (
    <div className="date_header">
      <span>{date.toUpperCase()}</span>
    </div>
  );
};

export default DateHeader;
