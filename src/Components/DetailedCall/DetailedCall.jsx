import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArchive,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import "./DetailedCall.css";

import imageIcon from "../../../public/images/image_icon.png";
import outboundCall from "../../../public/images/outbound.png";
import inboundCall from "../../../public/images/inbound.png";

import Container from "../UI/Container.jsx";
import DateHeader from "../UI/DateHeader.jsx";

const DetailedCall = (props) => {
  const { direction } = props;
  return (
    <div className="detailed_call">
      <img className="detailed_call__image" src={imageIcon} />
      <p>+33 6 34 45 74 34</p>
      <div className="detailed_call__icons">
        <FontAwesomeIcon
          size="2x"
          color="#1eb91e"
          icon={faPhoneAlt}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          color="#456cb3"
          size="2x"
          icon={faEnvelope}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          color="#5a5a5a"
          size="2x"
          icon={faArchive}
        ></FontAwesomeIcon>
      </div>
      <div className="detailed_call__items">
        <DateHeader date="2018-04-18" />
        <Container>
          <img
            className="call_item__icon-outbound"
            src={outboundCall}
            // src={direction === "outbound" ? outboundCall : inboundCall}
          />
          <div className="detail_call__info">
            <span>11:08 AM</span>
            <span>Missed call</span>
          </div>
        </Container>
        <DateHeader date="2018-04-18" />
        <Container>
          <img
            className="call_item__icon-outbound"
            src={outboundCall}
            // src={direction === "outbound" ? outboundCall : inboundCall}
          />
          <div className="detail_call__info">
            <span>11:08 AM</span>
            <span>Missed call</span>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default DetailedCall;
