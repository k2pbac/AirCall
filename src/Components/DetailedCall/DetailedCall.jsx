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
import { format } from "date-fns";
import { enCALocale } from "date-fns/locale/en-CA";
import useHttp from "../../hooks/useHttp";

const DetailedCall = (props) => {
  const { match } = props;
  const { error, isLoading, sendRequest } = useHttp();
  const [call, setCall] = useState({});
  const [dateTime, setDateTime] = useState({
    callDate: null,
    callTime: null,
  });

  useEffect(() => {
    if (Object.keys(call).length) {
      const realDate = new Date(call.created_at);
      setDateTime({
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
    (!isLoading && !error && Object.keys(call).length && (
      <div className="detailed_call">
        <img className="detailed_call__image" src={`/${imageIcon}`} />
        <p>{call.to}</p>
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
          <DateHeader date={dateTime.callDate} />
          <Container>
            <img
              className="call_item__icon-outbound"
              src={
                call.direction === "outbound"
                  ? `/${outboundCall}`
                  : `/${inboundCall}`
              }
            />
            <div className="detail_call__info">
              <span style={{ marginBottom: "2px" }}>{dateTime.callTime}</span>
              <span>
                <span style={{ color: "grey" }}>
                  {call.duration} mins 0 secs
                </span>
              </span>
            </div>
          </Container>
        </div>
      </div>
    )) || <Loader></Loader>
  );
};

export default DetailedCall;
