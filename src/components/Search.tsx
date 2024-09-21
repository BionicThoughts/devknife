import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Tool {
  label: string;
  path: string;
}

const tools: Tool[] = [
  { label: "Date Time", path: "/datetime" },
  { label: "Number Base Converter", path: "/number_base_converter" },
  { label: "Hex Converter", path: "/hex_converter" },
  { label: "UUID Generator", path: "/uuid_generator" },
];

const Search: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredTools, setFilteredTools] = useState<Tool[]>([]);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);

    // Filter results only if input has more than 2 characters
    if (value.length > 2) {
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

  return (
    <div className="relative">
      <input
        type="text"
        className="input input-sm rounded bg-base-100 w-full"
        placeholder="Search tools..."
        value={searchInput}
        onChange={handleInputChange}
      />

      {filteredTools.length > 0 && (
        <ul className="absolute w-full bg-base-200 border border-gray-300 z-10 mt-1 rounded shadow-lg">
          {filteredTools.map((tool) => (
            <li
              key={tool.path}
              className="cursor-pointer px-3 py-2 hover:bg-base-300"
              onClick={() => handleSelect(tool.path)}
            >
              {tool.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;