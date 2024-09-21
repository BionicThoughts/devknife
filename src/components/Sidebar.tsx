import React from "react";
import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";
import SectionTitle from "./common/SectionTitle";
import { Clock, Scale, Hash } from "lucide-react";
import Search from "./Search";

const Sidebar: React.FC = () => {
  const location = useLocation();

  // Helper function to check if the current path matches the link
  const isSelected = (path: string) => location.pathname === path;

  // Sidebar menu items with their respective paths and icons
  const menuItems = [
    { label: "Date Time", path: "/datetime", icon: <Clock size={15} /> },
    { label: "Number Base", path: "/number_base", icon: <Scale size={15} /> },
    { label: "Hash", path: "/hash", icon: <Hash size={15} /> },
    { label: "UUID", path: "/uuid", icon: <Hash size={15} /> },
  ];

  return (
    <div className="flex flex-col w-64 h-screen bg-base-200 border-r-[1px] border-r-zinc-700 min-w-[14rem]">
      <div className="main-titlebar w-100 h-[2rem]" data-tauri-drag-region></div>
      {/* <div className="mb-4 mt-2">
        <BaseInput className="mx-[0.35rem]  w-[95%]" placeholder="Search... ⌘⇧S" />
      </div> */}
      <div className="mb-4 mt-2 mx-[0.35rem]  rounded  w-[95%]">
        <Search />
      </div>

      <SectionTitle className="mx-3 my-1">Converter</SectionTitle>
      <div className="flex flex-col space-y-1 mx-3">
        {menuItems.slice(0,2).map((item) => (
          <MenuItem key={item.path} selected={isSelected(item.path)} to_link={item.path}>
            {item.icon}
            <span className="ml-2">{item.label}</span>
          </MenuItem>
        ))}
      </div>

      <div className="space mt-3"></div>

      <SectionTitle className="mx-3 my-1">Generators</SectionTitle>
      <div className="flex flex-col space-y-1 mx-3">
        {menuItems.slice(2).map((item) => (
          <MenuItem key={item.path} selected={isSelected(item.path)} to_link={item.path}>
            {item.icon}
            <span className="ml-2">{item.label}</span>
          </MenuItem>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;