import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchHospitals = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-full p-2 shadow-md bg-white">
      <input
        type="text"
        placeholder="Search hospitals..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow outline-none px-3 py-2 text-gray-700"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white rounded-lg px-4 py-2 ml-2 hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchHospitals;
