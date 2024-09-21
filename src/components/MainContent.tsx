import React from "react";
import DateTime from "./tools/DateTime";
import HexConverter from "./tools/HexConverter";
import NumberBaseConverter from "./tools/NumberBaseConverter";
import UUIDGenerator from "./tools/UUIDGenerator";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";


const MainContent: React.FC = () => {
  const location = useLocation();

  // Map the current route to a title
  const getTitle = () => {
    switch (location.pathname) {
      case "/datetime":
        return "Date Time";
      case "/number_base_converter":
        return "Number Base Converter";
      case "/hex_converter":
        return "Hex Converter";
      case "/uuid_generator":
        return "UUID Generator";
      default:
        return "Tools";
    }
  };

  // Optionally add bookmark logic here
  const handleBookmark = () => {
    console.log("Bookmark clicked!");
    // Add your bookmark logic here
  };


  return (
    <div className="main-content  h-screen flex-1 bg-base-300">
      <div className="titlebar flex justify-between content-center px-4 mt-1 py-2 text-gray-300 text-xl font-semibold">
        <span>{getTitle()}</span>
        <button onClick={handleBookmark}>☆</button>
      </div>
      <div className="content py-3 px-6 h-[100%] overflow-scroll">
        <Routes>
          <Route path="/" element={<Navigate to="/datetime" />} />
          <Route path="datetime" element={<DateTime />} />
          <Route path="number_base_converter" element={<NumberBaseConverter />} />
          <Route path="hex_converter" element={<HexConverter />} />
          <Route path="uuid_generator" element={<UUIDGenerator />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainContent;
