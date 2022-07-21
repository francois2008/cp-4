import React from "react";
import "../../styles/searchbar.css";

function SearchBar() {
  return (
    <div>
      <select
        className="search"
        id="select-category"
        placeholder="Pick a category..."
      >
        <option value="">Select a category...</option>
        <option value="AL">Hip-Hop</option>
        <option value="AK">Rock</option>
        <option value="AZ">Funk</option>
        <option value="AR">Reggae</option>
      </select>
    </div>
  );
}

export default SearchBar;
