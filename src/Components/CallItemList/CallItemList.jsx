import React, { useState } from "react";

import CallItem from "../CallItem/CallItem.jsx";
import "./CallItemList.css";

const CallItemList = ({ callItemsData }) => {
  const [callData, setCallData] = useState(callItemsData);
  const removedCallData = [];
  const countedSameCalls = callData.reduce((filtered, call) => {
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

  const displayCallData = Object.keys(countedSameCalls).reduce(
    (filtered, key) => {
      if (!countedSameCalls[key].call.is_archived) {
        filtered.push(
          <CallItem
            id={countedSameCalls[key].call.id}
            key={countedSameCalls[key].call.id}
            created_at={countedSameCalls[key].call.created_at}
            direction={countedSameCalls[key].call.direction}
            from={countedSameCalls[key].call.from}
            to={countedSameCalls[key].call.to}
            via={countedSameCalls[key].call.via}
            duration={countedSameCalls[key].call.duration}
            call_type={countedSameCalls[key].call.call_type}
            count={countedSameCalls[key].count}
          />
        );
      }
      return filtered;
    },
    []
  );

  // const displayCallData = callData.reduce(function (filtered, call) {
  //   if (!call.is_archived) {
  //     filtered.push(
  //       <CallItem
  //         id={call.id}
  //         key={call.id}
  //         created_at={call.created_at}
  //         direction={call.direction}
  //         from={call.from}
  //         to={call.to}
  //         via={call.via}
  //         duration={call.duration}
  //         call_type={call.call_type}
  //       />
  //     );
  //   }
  //   return filtered;
  // }, []);
  return <div className="CallItemList">{displayCallData}</div>;
};

export default CallItemList;
