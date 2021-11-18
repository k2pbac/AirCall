import React, { useState } from "react";

import CallItem from "../CallItem/CallItem.jsx";
import "./CallItemList.css";

const CallItemList = ({ callItemsData }) => {
  const [callData, setCallData] = useState(callItemsData);

  const displayCallData = callData.map((call) => {
    return (
      <CallItem
        id={call.id}
        key={call.id}
        created_at={call.created_at}
        direction={call.direction}
        from={call.from}
        to={call.to}
        via={call.via}
        duration={call.duration}
        call_type={call.missed}
      />
    );
  });

  return <div className="CallItemList">{displayCallData}</div>;
};

export default CallItemList;
