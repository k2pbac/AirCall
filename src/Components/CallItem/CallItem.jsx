import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import "./CallItem.css";
import outboundCall from "./outbound.png";
import inboundCall from "./inbound.png";
import { format } from "date-fns";
import { enCALocale } from "date-fns/locale/en-CA";

const CallItem = (props) => {
  const { id, created_at, direction, from, to, via, duration, call_type } =
    props;

  const realDate = new Date(created_at);
  const callDate = format(realDate, "MMMM, dd yyyy", {
    locale: enCALocale,
  });
  const callTime = format(realDate, "hh:mm", {
    locale: enCALocale,
  });

  return (
    <div className="call_item" id={id}>
      <div className="call_item__date">
        <span>{callDate}</span>
      </div>
      <div className="call_item__information">
        <img
          className="call_item__icon-outbound"
          src={direction === "outbound" ? outboundCall : inboundCall}
        />
        <div className="call_item__details">
          <span>
            <p>{from}</p>
            <p>
              <span className="call_item_light-span">tried to call on</span>{" "}
              {to === null ? "Private Number" : to}
            </p>
          </span>
        </div>
        <div className="call_item__time">
          <p>
            <FontAwesomeIcon size="1x" icon={faEllipsisV} />
            {callTime} <span>{realDate.getHours() > 12 ? "PM" : "AM"}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallItem;
