import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faUser, faCog } from "@fortawesome/free-solid-svg-icons";
import numPadIcon from "../../../public/images/num-pad_icon.png";
import recordIcon from "../../../public/images/record_icon.png";
import "./Footer.css";

const Footer = (props) => {
  const { activeTab, setActiveTab } = props;
  const [iconActive, setIconActive] = useState({
    icon1: activeTab === 0 ? true : false,
    icon2: activeTab === 1 ? true : false,
    icon3: activeTab === 2 ? true : false,
    icon4: activeTab === 3 ? true : false,
  });

  return (
    <footer className="footer">
      <Link
        to="/"
        className="footer__icon-wrapper"
        onClick={() => setIconActive((prev) => ({ prev, icon1: true }))}
      >
        <div>
          <div className="hvr-grow">
            <FontAwesomeIcon size="1x" icon={faPhoneAlt} />
          </div>
          <div className={`${iconActive.icon1 && "footer__icon-active"}`}></div>
        </div>
      </Link>
      <Link
        to="/contacts"
        onClick={() => setIconActive((prev) => ({ prev, icon2: true }))}
        className="footer__icon-wrapper"
      >
        <div>
          <div className="hvr-grow">
            <FontAwesomeIcon size="1x" icon={faUser} />
          </div>
          <div className={`${iconActive.icon2 && "footer__icon-active"}`}></div>
        </div>
      </Link>
      <Link to="/phone" className="footer__icon-wrapper">
        <div>
          <img className="footer__numPadIcon" src={numPadIcon} />
        </div>
      </Link>
      <Link
        to="/settings"
        onClick={() => setIconActive((prev) => ({ prev, icon3: true }))}
        className="footer__icon-wrapper"
      >
        <div>
          <div className="hvr-grow">
            <FontAwesomeIcon size="1x" icon={faCog} />
          </div>
          <div className={`${iconActive.icon3 && "footer__icon-active"}`}></div>
        </div>
      </Link>
      <Link
        to="record"
        onClick={() => setIconActive((prev) => ({ prev, icon4: true }))}
        className="footer__icon-wrapper"
      >
        <div>
          <div className="hvr-grow">
            <img className="footer__recordIcon" src={recordIcon} />
          </div>
          <div className={`${iconActive.icon4 && "footer__icon-active"}`}></div>
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
