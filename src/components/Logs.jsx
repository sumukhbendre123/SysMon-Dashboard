// Logs.js
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MimicLogs } from "../utility/utils";
import Spinner from "../Assets/Spinner.svg";

function Logs({ selectedTime }) {
  const location = useLocation();
  const [logsData, setLogsData] = useState(null);

  useEffect(() => {
    const fetchLogsData = async () => {
      try {
        console.log(selectedTime)
        const startTs = new Date().getTime() - selectedTime * 60 * 1000;
        const endTs = new Date().getTime();
        const data = await MimicLogs.fetchPreviousLogs({
          startTs,
          endTs,
          limit: 100,
        });
        setLogsData(data);
      } catch (error) {
        console.error("Error fetching logs data:", error);
      }
    };

    fetchLogsData();

    return () => {
      // Clean up function
    };
  }, [location, selectedTime]);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.toLocaleString("default", {
      month: "short",
    })} ${date.getDate()} ${date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })}`;
  };

  const getTimeInMilliseconds = (selectedTime) => {
    switch (selectedTime) {
      case "Last 5 minutes":
        return 5 * 60 * 1000;
      case "Last 30 minutes":
        return 30 * 60 * 1000;
      case "Last 1 hour":
        return 60 * 60 * 1000;
      case "Last 6 hours":
        return 6 * 60 * 60 * 1000;
      default:
        return 60 * 60 * 1000; // Default to last 1 hour
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="bg-customDarkBlue text-white w-full rounded-md">
        <div className="bg-customDarkBlue px-4 py-2 rounded-t-md">
          <div className="bg-customDarkBlue rounded-t-md flex items-center justify-center">
            <img src={Spinner} className="mr-2" alt="Loading Spinner" />
            <span className="font-FiraCode text-xs font-medium text-left">
              Loading previous 100 logs
            </span>
          </div>
        </div>
        <div className="px-4 py-2 overflow-x-auto max-h-[87vh]">
          {logsData ? (
            <div className="whitespace-nowrap">
              {logsData.map((log, index) => (
                <p key={index} className="mb-2 font-mono flex items-start">
                  <span
                    className={`mr-2 h-5 w-1 ${
                      {
                        info: "bg-customBlue",
                        success: "bg-green-500",
                        warning: "bg-orange-500",
                        error: "bg-red-500",
                      }[log.level]
                    }`}
                  ></span>
                  <span className="mr-2 h-5 w-100 text-customBlue">
                    {formatTimestamp(log.timestamp)}
                  </span>
                  <span
                    className={`ml-2 h-5 w-100 ${
                      {
                        info: "text-customBlue",
                        success: "text-green-500",
                        warning: "text-orange-500",
                        error: "text-red-500",
                      }[log.level]
                    }`}
                  >
                    [{log.level.toLowerCase()}]
                  </span>
                  <span className="text-customGray flex-1 overflow-hidden">
                    {log.message}
                  </span>
                </p>
              ))}
            </div>
          ) : (
            <p>Loading logs...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Logs;
