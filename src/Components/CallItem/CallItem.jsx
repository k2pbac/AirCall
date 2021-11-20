import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArchive,
  faEllipsisV,
  faEnvelope,
  faInfoCircle,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

import "./CallItem.css";
import outboundCall from "../../../public/images/outbound.png";
import inboundCall from "../../../public/images/inbound.png";
import { format } from "date-fns";
import { enCALocale } from "date-fns/locale/en-CA";

import Container from "../UI/Container/Container.jsx";
import DateHeader from "../UI/DateHeader/DateHeader.jsx";
import Time from "../UI/Time/Time.jsx";

const CallItem = (props) => {
  const { id, created_at, direction, from, to, count } = props;
  const [displayDrawer, setDisplayDrawer] = useState(false);
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
      {/* <Link to={`/call/${id}`}> */}
      <div
        onClick={() => {
          setDisplayDrawer((prev) => !prev);
        }}
      >
        <Container className={`${displayDrawer ? "display_drawer" : ""}`}>
          <div className="test">
            <div className="centered">
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
                    <span className="call_item_light-span">
                      tried to call on
                    </span>{" "}
                    {to === null ? "Private Number" : to}
                  </p>
                </span>
              </div>
              <Time time={callTime} date={realDate}></Time>
            </div>
          </div>

          <div className={`drawer ${!displayDrawer && "hide_drawer"}`}>
            <p>Add to contacts</p>
            <div className="icons">
              <FontAwesomeIcon
                size="2x"
                color="#1eb91e"
                icon={faPhoneAlt}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                size="2x"
                color="#2e6fb5"
                icon={faEnvelope}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                color="#5a5a5a"
                size="2x"
                icon={faArchive}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                size="2x"
                color="#2e6fb5"
                icon={faInfoCircle}
              ></FontAwesomeIcon>
            </div>
          </div>
        </Container>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default CallItem;
