import React, { useState } from "react";

import "./Header.css";
import activity from "../../../public/images/activity.png";
import headerCurved from "../../../public/images/header-curved.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [linkSet, setLinkSet] = useState({ link1: true, link2: false });
  return (
    <header>
      <img
        style={{
          width: "120px",
          height: "120px",
          position: "absolute",
          top: "-25px",
          left: "0",
        }}
        src={activity}
      />
      <div style={{ display: "flex", height: "100%" }}>
        <Link
          onClick={() => setLinkSet(() => ({ link2: false, link1: true }))}
          to="/"
          className={` ${linkSet.link1 ? "header__icon-active" : ""}`}
        >
          Inbox
        </Link>
        <FontAwesomeIcon
          style={{ color: "#80808047" }}
          size="sm"
          className="spaceBetween"
          icon={faEllipsisV}
        />
        <div
          style={{ display: "flex", height: "100%" }}
          className={`spaceBetween ${
            linkSet.link2 ? "header__icon-active" : ""
          }`}
        >
          <Link
            onClick={() => setLinkSet(() => ({ link1: false, link2: true }))}
            to="/calls"
          >
            All Calls
          </Link>
        </div>
        <FontAwesomeIcon
          style={{ color: "#80808047" }}
          size="sm"
          className="spaceBetween"
          icon={faEllipsisV}
        />
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ height: "23px" }}
            className="spaceBetween"
            src="https://img.icons8.com/ios/23/000000/vertical-settings-mixer--v1.png"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
