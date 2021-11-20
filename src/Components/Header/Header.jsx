import React from "react";

import "./Header.css";
import activity from "../../../public/images/activity.png";
import headerCurved from "../../../public/images/header-curved.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img
        style={{
          width: "120px",
          height: "120px",
          position: "absolute",
          top: "-20px",
          left: "0",
        }}
        src={activity}
      />
      <Link to="/">Inbox</Link>
      <FontAwesomeIcon
        style={{ color: "#80808047" }}
        size="sm"
        className="spaceBetween"
        icon={faEllipsisV}
      />
      <Link className="spaceBetween" to="/calls">
        All Calls
      </Link>
      <FontAwesomeIcon
        style={{ color: "#80808047" }}
        size="sm"
        className="spaceBetween"
        icon={faEllipsisV}
      />
      <img
        className="spaceBetween"
        src="https://img.icons8.com/ios/23/000000/vertical-settings-mixer--v1.png"
      />
    </header>
  );
};

export default Header;
