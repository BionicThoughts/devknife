import React from "react";
import DateTime from "./tools/DateTime";
import Hash from "./tools/Hash";
import NumberBase from "./tools/NumberBase";
import UUID from "./tools/UUID";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

const MainContent: React.FC = () => {
  const location = useLocation();

  // Map the current route to a title
  const getTitle = () => {
    switch (location.pathname) {
      case "/datetime":
        return "Date Time";
      case "/number_base":
        return "Number Base Converter";
      case "/hash":
        return "Hash Generator";
      case "/uuid":
        return "UUID Generator";
      default:
        return "Tools";
    }
  };

  // Optionally add bookmark logic here
  // const handleBookmark = () => {
  //   console.log("Bookmark clicked!");
  //   // Add your bookmark logic here
  // };

  return (
    <div className="main-content  h-screen flex-1 bg-base-300">
      <div className="titlebar flex justify-between content-center px-4 mt-1 py-2 text-gray-300 text-xl font-semibold">
        <span>{getTitle()}</span>
        {/* <button onClick={handleBookmark}>☆</button> */}
      </div>
      <div className="content py-3 px-6 h-[100%] overflow-scroll">
        <Routes>
          <Route path="/" element={<Navigate to="/datetime" />} />
          <Route path="datetime" element={<DateTime />} />
          <Route path="number_base" element={<NumberBase />} />
          <Route path="hash" element={<Hash />} />
          <Route path="uuid" element={<UUID />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainContent;
