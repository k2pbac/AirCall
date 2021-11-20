import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArchive,
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

import useArchiveRequest from "../../hooks/useArchiveRequest";
import useHttp from "../../hooks/useHttp";

const CallItem = (props) => {
  const {
    id,
    created_at,
    direction,
    from,
    to,
    count,
    setCallData,
    is_archived,
    isFullView,
  } = props;

  const [displayDrawer, setDisplayDrawer] = useState(false);
  const { isLoading, error, sendRequest } = useHttp();
  const requestConfig = {
    url: `https://aircall-job.herokuapp.com/activities/${id}`,
    method: "POST",
    body: {
      is_archived: !is_archived,
    },
  };

  const { archiveItem, newLoading, setNewLoading, update, setUpdate } =
    useArchiveRequest(sendRequest, requestConfig);

  useEffect(() => {
    if (update === true) {
      setNewLoading(true);
      const intervalId = setInterval(
        () =>
          setCallData((prev) => {
            let newObj;
            if (isFullView) {
              newObj = prev.map((x) => {
                if (x.props.id === id) {
                  const obj = x;
                  obj.props.is_archived = !obj.props.is_archived;
                  return obj;
                } else {
                  return x;
                }
              });
            } else {
              newObj = prev.filter((x) => x.props.id !== id);
            }
            setUpdate(false);
            return newObj;
          }),
        0
      );
      return () => {
        clearInterval(intervalId);
        setNewLoading(false);
        setUpdate(false);
      };
    }
  }, [update]);

  const realDate = new Date(created_at);
  const callDate = format(realDate, "MMMM, dd yyyy", {
    locale: enCALocale,
  });
  const callTime = format(realDate, "hh:mm", {
    locale: enCALocale,
  });

  return (
    !isLoading &&
    !error &&
    !newLoading && (
      <div className="call_item" id={id}>
        <DateHeader date={callDate}></DateHeader>
        <div
          onClick={() => {
            setDisplayDrawer((prev) => !prev);
          }}
        >
          <Container
            className={`${
              displayDrawer ? "display_drawer" : "container_hide_drawer"
            }`}
          >
            <div
              className="centered-container"
              style={{ marginTop: `${is_archived ? "10px" : "0px"}` }}
            >
              <span
                style={{
                  display: `${
                    is_archived ? "display: inline" : "display: none"
                  }`,
                }}
                className="archived_text"
              >
                {is_archived ? "Archived" : ""}
              </span>
              <div className="centered">
                <img
                  className="call_item__icon-outbound"
                  src={direction === "outbound" ? outboundCall : inboundCall}
                />
                <div className="call_item__details">
                  <span>
                    <div style={{ display: "flex" }}>
                      <p style={{ marginBottom: "4px" }}> {from} </p>
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
                <Link to="/phone">
                  <FontAwesomeIcon
                    size="2x"
                    color="#1eb91e"
                    icon={faPhoneAlt}
                  ></FontAwesomeIcon>
                </Link>
                <Link to="/message">
                  <FontAwesomeIcon
                    size="2x"
                    color="#2e6fb5"
                    icon={faEnvelope}
                  ></FontAwesomeIcon>
                </Link>
                <FontAwesomeIcon
                  style={{ cursor: "pointer" }}
                  color="#5a5a5a"
                  size="2x"
                  icon={faArchive}
                  onClick={() => {
                    archiveItem();
                  }}
                ></FontAwesomeIcon>
                <Link to={`/call/${id}`}>
                  <FontAwesomeIcon
                    size="2x"
                    color="#2e6fb5"
                    icon={faInfoCircle}
                  ></FontAwesomeIcon>
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </div>
    )
  );
};

export default CallItem;
