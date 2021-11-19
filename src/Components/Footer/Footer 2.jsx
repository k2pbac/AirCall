import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faUser, faCog } from "@fortawesome/free-solid-svg-icons";
import numPadIcon from "./num-pad_icon.png";
import recordIcon from "./record_icon.png";
import "./Footer.css";

const Footer = (props) => {
  const [iconActive, setIconActive] = useState({
    icon1: false,
    icon2: false,
    icon3: false,
    icon4: false,
  });

  return (
    <footer className="footer">
      <div className="footer__icon-wrapper">
        <FontAwesomeIcon
          onClick={() => setIconActive((prev) => ({ prev, icon1: true }))}
          size="1x"
          icon={faPhoneAlt}
        />
        <div className={`${iconActive.icon1 && "footer__icon-active"}`}></div>
      </div>
      <div className="footer__icon-wrapper">
        <FontAwesomeIcon
          onClick={() => setIconActive((prev) => ({ prev, icon2: true }))}
          size="1x"
          icon={faUser}
        />
        <div className={`${iconActive.icon2 && "footer__icon-active"}`}></div>
      </div>
      <img className="footer__numPadIcon" src={numPadIcon} />
      <div className="footer__icon-wrapper">
        <FontAwesomeIcon
          onClick={() => setIconActive((prev) => ({ prev, icon3: true }))}
          size="1x"
          icon={faCog}
        />
        <div className={`${iconActive.icon3 && "footer__icon-active"}`}></div>
      </div>
      <div className="footer__icon-wrapper">
        <img
          onClick={() => setIconActive((prev) => ({ prev, icon4: true }))}
          className="footer__recordIcon"
          src={recordIcon}
        />
        <div className={`${iconActive.icon4 && "footer__icon-active"}`}></div>
      </div>
    </footer>
  );
};

export default Footer;
