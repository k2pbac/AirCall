import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import "./Time.css";

const Time = ({ time, date }) => {
  return (
    <div className="time">
      <p>
        <FontAwesomeIcon size="1x" icon={faEllipsisV} />
        {time} <span>{date.getHours() > 12 ? "PM" : "AM"}</span>
      </p>
    </div>
  );
};

export default Time;
