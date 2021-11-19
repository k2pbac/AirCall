import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import "./CallItem.css";
import outboundCall from "../../../public/images/outbound.png";
import inboundCall from "../../../public/images/inbound.png";
import { format } from "date-fns";
import { enCALocale } from "date-fns/locale/en-CA";

import Container from "../UI/Container.jsx";
import DateHeader from "../UI/DateHeader.jsx";

const CallItem = (props) => {
  const {
    id,
    created_at,
    direction,
    from,
    to,
    via,
    duration,
    call_type,
    count,
  } = props;

  const realDate = new Date(created_at);
  const callDate = format(realDate, "MMMM, dd yyyy", {
    locale: enCALocale,
  });
  const callTime = format(realDate, "hh:mm", {
    locale: enCALocale,
  });

  return (
    <div className="call_item" id={id}>
      <DateHeader date={callDate}></DateHeader>
      <Link to={`call/${id}`}>
        <Container>
          <img
            className="call_item__icon-outbound"
            src={direction === "outbound" ? outboundCall : inboundCall}
          />
          <div className="call_item__details">
            <span>
              <div style={{ display: "flex" }}>
                <p style={{ marginRight: "4px" }}> {from} </p>
                <div
                  className={`${
                    count <= 1 && "call_item__badge-display"
                  } call_item__badge`}
                >
                  <span className="call_item__count">
                    {count > 1 ? count : ""}
                  </span>
                </div>
              </div>
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
        </Container>
      </Link>
    </div>
  );
};

export default CallItem;
