import React from "react";
import TextField from "@mui/material/TextField";
import "../../styles/searchbar.css";

function SearchBar() {
  return (
    <div>
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          size="small"
        />
      </div>
    </div>
  );
}

export default SearchBar;
