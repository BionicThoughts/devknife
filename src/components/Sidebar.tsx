import React from "react";
import BaseInput from "./base/BaseInput";
import MenuItem from "./MenuItem";
import SectionTitle from "./common/SectionTitle";
import { Clock,Scale,Hash } from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col w-64 h-screen bg-base-200  shadow-lg">
      <div className="mb-4">
        <BaseInput
          className="mx-1 mt-2  w-[15rem]"
          placeholder="Search... ⌘⇧S"
        />
      </div>
      <SectionTitle className="mx-2 my-1">Converter</SectionTitle>
      <div className="flex flex-col space-y-1 mx-2">
        <MenuItem selected>
          <span className="flex items-center">
            <Clock size={15} />
            <span className="ml-2"> Date Time</span>
          </span>
        </MenuItem>
        <MenuItem>
          <span className="flex items-center">
            <Scale size={15} />
            <span className="ml-2"> Unit Converter</span>
          </span>
        </MenuItem>
        <MenuItem>
          <span className="flex items-center">
            <Hash size={15} />
            <span className="ml-2">Hex Converter</span>
          </span>
        </MenuItem>
      </div>
    </div>
  );
};

export default Sidebar;
