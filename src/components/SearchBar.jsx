import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <div className="container mt-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search by title or location"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="btn btn primary" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
