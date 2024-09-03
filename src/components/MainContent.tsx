import React from "react";
import DateTime from "./tools/DateTime";
const MainContent: React.FC = () => {
  return (
    <div className="main-content  h-screen flex-1 bg-neutral-900/10">
      <div className="titlebar flex justify-between content-center px-4 py-2 text-gray-300 text-xl  font-semibold">
        <span>Date Time</span>
        <button>☆</button>
      </div>
      <div className="content py-3 px-6 h-[100%] overflow-scroll">
        <DateTime />
      </div>
    </div>
  );
};

export default MainContent;
