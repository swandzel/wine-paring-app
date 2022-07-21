import React from "react";
import "./SearchBar.css";

const SearchBar = ({ fetchFunc, query, queryFromSearch, search }) => {
  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          onChange={(e) => queryFromSearch(e.target.value)}
          value={query}
          onKeyPress={search}
          placeholder="Look for wine for yourself "
        />
      </div>
      <button className="search-btn" onClick={fetchFunc}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;