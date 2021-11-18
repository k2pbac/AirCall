import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import "./CallItem.css";
import outboundCall from "./outbound.png";
import inboundCall from "./inbound.png";
const CallItem = () => {
  return (
    <div className="call_item">
      <img className="call_item__icon-outbound" src={outboundCall} />
      <div className="call_item__details">
        <span>
          <p>+33 6 45 13 53 91</p>
          <p>tried to call on Xavier</p>
        </span>
      </div>
      <div className="call_item__time">
        <p>
          <FontAwesomeIcon size="1x" icon={faEllipsisV} />
          07:58 <span>PM</span>
        </p>
      </div>
    </div>
  );
};

export default CallItem;
