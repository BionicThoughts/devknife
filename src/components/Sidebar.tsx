import React from "react";
import BaseInput from "./base/BaseInput";
import MenuItem from "./MenuItem";
import SectionTitle from "./common/SectionTitle";
import { Clock, Scale, Hash } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col w-64 h-screen bg-base-200 border-r-[1px] border-r-zinc-700 min-w-[14rem]">
      <div className="main-titlebar w-100 h-[2rem]" data-tauri-drag-region></div>
      <div className="mb-4 mt-2">
        <BaseInput
          className="mx-[0.35rem]  w-[95%]"
          placeholder="Search... ⌘⇧S"
        />
      </div>
      <SectionTitle className="mx-3 my-1">Converter</SectionTitle>
      <div className="flex flex-col space-y-1 mx-3">
        <MenuItem selected>
          <Link to="/datetime" className="flex items-center">
            <span className="flex items-center">
              <Clock size={15} />
              <span className="ml-2"> Date Time</span>
            </span>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/unit_converter" className="flex items-center">
            <span className="flex items-center">
              <Scale size={15} />
              <span className="ml-2"> Unit Converter</span>
            </span>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/hex_converter" className="flex items-center">
            <span className="flex items-center">
              <Hash size={15} />
              <span className="ml-2">Hex Converter</span>
            </span>
          </Link>
        </MenuItem>

      </div>
      <div className="space mt-3"></div>
      <SectionTitle className="mx-3 my-1">Generators</SectionTitle>
      <div className="flex flex-col space-y-1 mx-3">
        <MenuItem>
          <Link to="/uuid_generator" className="flex items-center">
            <span className="flex items-center">
              <Hash size={15} />
              <span className="ml-2">UUID Generator</span>
            </span>
          </Link>
        </MenuItem>
      </div>
    </div>
  );
};

export default Sidebar;
