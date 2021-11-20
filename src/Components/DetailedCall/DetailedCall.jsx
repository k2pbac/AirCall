import React, { useState, useEffect } from "react";
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

import Container from "../UI/Container/Container.jsx";
import DateHeader from "../UI/DateHeader/DateHeader.jsx";
import Loader from "../UI/Loader/Loader.jsx";
import Time from "../UI/Time/Time.jsx";

import { format } from "date-fns";
import { enCALocale } from "date-fns/locale/en-CA";

import useHttp from "../../hooks/useHttp";
import useArchiveRequest from "../../hooks/useArchiveRequest";

const DetailedCall = (props) => {
  const { match } = props;
  const { error, isLoading, sendRequest } = useHttp();

  const [call, setCall] = useState({});
  const [dateTime, setDateTime] = useState({
    realDate: null,
    callDate: null,
    callTime: null,
  });
  const requestConfig = {
    url: `https://aircall-job.herokuapp.com/activities/${match.params.id}`,
    method: "POST",
    body: {
      is_archived: !call.is_archived,
    },
  };
  const { archiveItem, newLoading, setNewLoading, update, setUpdate } =
    useArchiveRequest(sendRequest, requestConfig);

  useEffect(() => {
    if (update === true) {
      setNewLoading(true);
      const intervalId = setInterval(
        () =>
          setCall((prev) => {
            setUpdate(false);
            return { ...prev, is_archived: !prev.is_archived };
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

  useEffect(() => {
    if (Object.keys(call).length) {
      const realDate = new Date(call.created_at);
      setDateTime({
        realDate: realDate,
        callDate: format(realDate, "MMMM, dd yyyy", {
          locale: enCALocale,
        }),
        callTime: format(realDate, "hh:mm", {
          locale: enCALocale,
        }),
      });
    }
  }, [call]);

  useEffect(() => {
    sendRequest(
      {
        url: `https://aircall-job.herokuapp.com/activities/${match.params.id}`,
      },
      (res) => {
        setCall(res.data);
      }
    );
  }, [match.params.id]);

  return (
    (!isLoading && !error && Object.keys(call).length && !newLoading && (
      <div className="detailed_call">
        <img className="detailed_call__image" src={`/${imageIcon}`} />
        <span
          style={{
            fontFamily: "Montserrat, sans-serif",
            color: "grey",
            display: `${call.is_archived ? "block" : "none"}`,
          }}
        >
          {call.is_archived ? "Archived" : ""}
        </span>
        <p>{call.to || "Private Number"}</p>
        <div className="detailed_call__icons">
          <FontAwesomeIcon
            style={{ cursor: "pointer" }}
            size="2x"
            color="#1eb91e"
            icon={faPhoneAlt}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            style={{ cursor: "pointer" }}
            color="#456cb3"
            size="2x"
            icon={faEnvelope}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            style={{ cursor: "pointer" }}
            color="#5a5a5a"
            size="2x"
            icon={faArchive}
            onClick={() => {
              archiveItem();
            }}
          ></FontAwesomeIcon>
        </div>
        <div className="detailed_call__items">
          <DateHeader date={dateTime.callDate} />
          <Container className={""}>
            <img
              className="call_item__icon-outbound"
              src={
                call.direction === "outbound"
                  ? `/${outboundCall}`
                  : `/${inboundCall}`
              }
            />
            <div className="detail_call__info">
              <span style={{ marginBottom: "2px" }}>{call.via}</span>
              {/* <span style={{ marginBottom: "2px" }}>{dateTime.callTime}</span> */}
              <span>
                <span style={{ color: "grey" }}>
                  {call.duration} mins 0 secs
                </span>
              </span>
            </div>
            <Time time={dateTime.callTime} date={dateTime.realDate}></Time>
          </Container>
        </div>
      </div>
    )) ||
    (isLoading && <Loader></Loader>) ||
    (!isLoading && !Object.keys(call).length && <p>No calls found</p>)
  );
};

export default DetailedCall;
