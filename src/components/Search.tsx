import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircleX } from "lucide-react";

interface Tool {
  label: string;
  path: string;
}

const tools: Tool[] = [
  { label: "Date Time", path: "/datetime" },
  { label: "Number Base", path: "/number_base" },
  { label: "Hash", path: "/hash" },
  { label: "UUID", path: "/uuid" },
];

const Search: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredTools, setFilteredTools] = useState<Tool[]>([]);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);

    // Filter results only if input has more than 2 characters
    if (value.length >= 2) {
      const filtered = tools.filter(tool =>
        tool.label.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredTools(filtered);
    } else {
      setFilteredTools([]);
    }
  };

  const handleSelect = (path: string) => {
    navigate(path);  // Navigate to the selected tool's path
    setSearchInput("");  // Clear the search input
    setFilteredTools([]);  // Clear filtered results
  };

  const clearSearch = () => {
    setSearchInput("");
    setFilteredTools([]);
  }

  return (
    <div className="relative">
      <input
        type="text"
        className="input input-sm rounded bg-base-100 w-[14.7rem] mx-[.3rem]"
        placeholder="Search tools..."
        value={searchInput}
        onChange={handleInputChange}
      />
      {filteredTools.length > 0 && (
        <>
          <button onClick={() => clearSearch()} className="absolute rounded-full top-[.15rem] right-1 clear-btn h-[1.7rem] w-[1.7rem] flex justify-center items-center text-gray-400 hover:text-gray-200">
            <CircleX size={20} />
          </button>
          <ul className="absolute w-full h-auto min-h-[20rem] bg-base-100 py-1 px-2 p z-10 mt-1 rounded shadow-sm shadow-black">
            <h6>
              <small className="text-gray-400">
                Match for ... <b className="text-gray-300">'{searchInput}'</b>
              </small>
            </h6>
            <div className="space my-2"></div>
            {filteredTools.map((tool) => (
              <li
                key={tool.path}
                className="rounded cursor-pointer bg-base-200  px-2 py-1 hover:bg-base-300"
                onClick={() => handleSelect(tool.path)}
              >
                {tool.label}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Search;