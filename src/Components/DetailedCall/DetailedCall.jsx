import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArchive,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import "./DetailedCall.css";
import imageIcon from "./image_icon.png";

const DetailedCall = (props) => {
  return (
    <div className="detailed-call">
      <img className="detailed-call__image" src={imageIcon} />
      <p>+33 6 34 45 74 34</p>
      <div className="detailed-call__details">
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
    </div>
  );
};

export default DetailedCall;
