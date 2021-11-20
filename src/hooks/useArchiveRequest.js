import React, { useState, useEffect } from "react";

const useArchiveRequest = (sendRequest, requestConfig) => {
  const [newLoading, setNewLoading] = useState(false);
  const [update, setUpdate] = useState(false);

  const updateData = () => {
    setUpdate(true);
  };

  const archiveItem = () => {
    sendRequest(requestConfig, updateData);
  };

  return {
    update,
    archiveItem,
    newLoading,
    setNewLoading,
    setUpdate,
  };
};

export default useArchiveRequest;
