import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faUser, faCog } from "@fortawesome/free-solid-svg-icons";
import numPadIcon from "../../../public/images/num-pad_icon.png";
import recordIcon from "../../../public/images/record_icon.png";
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
        <div
          className="hvr-grow"
          onClick={() => setIconActive((prev) => ({ prev, icon1: true }))}
        >
          <FontAwesomeIcon size="1x" icon={faPhoneAlt} />
        </div>
        <div className={`${iconActive.icon1 && "footer__icon-active"}`}></div>
      </div>
      <div className="footer__icon-wrapper">
        <div
          className="hvr-grow"
          onClick={() => setIconActive((prev) => ({ prev, icon2: true }))}
        >
          <FontAwesomeIcon size="1x" icon={faUser} />
        </div>
        <div className={`${iconActive.icon2 && "footer__icon-active"}`}></div>
      </div>
      <div className="footer__icon-wrapper">
        <img className="footer__numPadIcon" src={numPadIcon} />
      </div>
      <div className="footer__icon-wrapper">
        <div
          className="hvr-grow"
          onClick={() => setIconActive((prev) => ({ prev, icon3: true }))}
        >
          <FontAwesomeIcon size="1x" icon={faCog} />
        </div>
        <div className={`${iconActive.icon3 && "footer__icon-active"}`}></div>
      </div>
      <div className="footer__icon-wrapper">
        <div
          className="hvr-grow"
          onClick={() => setIconActive((prev) => ({ prev, icon4: true }))}
        >
          <img className="footer__recordIcon" src={recordIcon} />
        </div>
        <div className={`${iconActive.icon4 && "footer__icon-active"}`}></div>
      </div>
    </footer>
  );
};

export default Footer;
