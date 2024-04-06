import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MetricsLogo from "../Assets/metrics-gray.png";
import LogsLogo from "../Assets/list.png";
import ActiveMetricsLogo from "../Assets/metrics.png";
import ActiveLogsLogo from "../Assets/list-active.png";
import TFLogo from "../Assets/TF logo.svg";

function Navbar({ onTimeSelect }) {
  const location = useLocation();
  const [selectedTime, setSelectedTime] = useState(1);

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    onTimeSelect(time);
  };

  return (
    <nav className="bg-white text-white py-4 px-8 flex items-center">
      <img src={TFLogo} alt="logo" className="h-10" />
      <ul className="flex ml-4">
        <li className="ml-4">
          <Link
            to="/metrics"
            className={`flex items-center ${
              location.pathname === "/metrics" ? "text-black" : "text-gray-300"
            }`}
          >
            <img
              src={
                location.pathname === "/metrics"
                  ? ActiveMetricsLogo
                  : MetricsLogo
              }
              alt="Metrics"
              className="h-4 w-4 mr-2"
            />
            Metrics
          </Link>
          {location.pathname === "/metrics" && (
            <div className="h-1 w-full bg-purple-600 mt-1"></div>
          )}
        </li>
        <li className="ml-4">
          <Link
            to="/logs"
            className={`flex items-center ${
              location.pathname === "/logs" ? "text-black" : "text-gray-300"
            }`}
          >
            <img
              src={location.pathname === "/logs" ? ActiveLogsLogo : LogsLogo}
              alt="Logs"
              className="h-4 w-4 mr-2"
            />
            Logs
          </Link>
          {location.pathname === "/logs" && (
            <div className="h-1 w-full bg-purple-600 mt-1"></div>
          )}
        </li>
      </ul>
      <div className="ml-auto">
        <select
          className="border border-gray-300 rounded-md py-1 px-2 text-black"
          value={selectedTime}
          onChange={(e) => handleTimeSelect(e.target.value)}
        >
          <option value={5}>Last 5 minutes</option>
          <option value={15}>Last 15 minutes</option>
          <option value={30}>Last 30 minutes</option>
          <option value={1}>Last 1 hour</option>
          <option value={3}>Last 3 hours</option>
          <option value={6}>Last 6 hours</option>
        </select>
      </div>
    </nav>
  );
}

export default Navbar;
