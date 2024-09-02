import React from "react";

interface TooltipProps {
  message: string;
  show: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({ message, show }) => {
  return (
    <div className={`relative inline-block`}>
      {show && (
        <div className="z-50 absolute top-[-3.2rem] left-[-2rem]  transform -translate-x-1/2  bg-[#373737] text-white text-sm rounded py-1 px-2">
          {message}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
