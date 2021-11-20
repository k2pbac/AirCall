import React, { useState, useEffect } from "react";

import CallItem from "../CallItem/CallItem.jsx";
import "./CallItemList.css";
import useHttp from "../../hooks/useHttp";
import Loader from "../UI/Loader/Loader.jsx";

const CallItemList = ({ callItemsData, setActiveTab, fullView }) => {
  const [callData, setCallData] = useState({});
  const { isLoading, error, sendRequest } = useHttp();
  const countedSameCalls = (res) => {
    const newData = res.data.reduce((filtered, call) => {
      if (filtered[call.to + " " + call.from + " " + call.created_at]) {
        filtered[call.to + " " + call.from + " " + call.created_at]["count"]++;
      } else {
        filtered[call.to + " " + call.from + " " + call.created_at] = {
          call,
          count: 1,
        };
      }
      return filtered;
    }, {});
    const displayCallData = Object.keys(newData).reduce((filtered, key) => {
      if (!newData[key].call.is_archived && !fullView) {
        filtered.push(
          <CallItem
            id={newData[key].call.id}
            key={newData[key].call.id}
            created_at={newData[key].call.created_at}
            direction={newData[key].call.direction}
            from={newData[key].call.from}
            to={newData[key].call.to}
            via={newData[key].call.via}
            duration={newData[key].call.duration}
            call_type={newData[key].call.call_type}
            count={newData[key].count}
            setCallData={setCallData}
            is_archived={newData[key].call.is_archived}
            isFullView={fullView}
          />
        );
      } else if (fullView) {
        filtered.push(
          <CallItem
            id={newData[key].call.id}
            key={newData[key].call.id}
            created_at={newData[key].call.created_at}
            direction={newData[key].call.direction}
            from={newData[key].call.from}
            to={newData[key].call.to}
            via={newData[key].call.via}
            duration={newData[key].call.duration}
            call_type={newData[key].call.call_type}
            count={newData[key].count}
            setCallData={setCallData}
            is_archived={newData[key].call.is_archived}
            isFullView={fullView}
          />
        );
      }
      return filtered;
    }, []);
    setCallData(displayCallData);
  };

  const fetchCallData = () => {
    sendRequest(
      {
        url: "https://aircall-job.herokuapp.com/activities",
        method: "GET",
      },
      countedSameCalls
    );
  };
  useEffect(() => {
    fetchCallData();
  }, []);

  return (
    (!isLoading && !error && Object.keys(callData).length && (
      <div className="CallItemList">{callData}</div>
    )) ||
    (isLoading && <Loader></Loader>) ||
    (!isLoading && !Object.keys(callData).length && (
      <p className="empty-calls">No calls found</p>
    ))
  );
};

export default CallItemList;
