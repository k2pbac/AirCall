import { useState, useCallback } from "react";
import axios from "axios";
const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios({
        url: requestConfig.url,
        method: requestConfig.method ? requestConfig.method : "GET",
        data: requestConfig.body ? requestConfig.body : null,
      });

      if (!response.data) {
        throw new Error("Request failed!");
      }

      const data = await response;
      applyData(data);
    } catch (err) {
      console.log(err);
      setError(err.message || "Something went wrong!");
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 0);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
