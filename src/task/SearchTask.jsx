import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchTask({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="relative w-full sm:w-64">
      <input
        type="search"
        className="w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 border border-gray-200 dark:border-gray-600 transition-colors"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          onSearch(e.target.value);
        }}
      />
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500">
        <FaSearch className="h-4 w-4" />
      </div>
    </div>
  );
}

export default SearchTask;
