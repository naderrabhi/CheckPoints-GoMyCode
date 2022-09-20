import React from "react";

const Search = ({ handleSearch }) => {
  return (
    <div>
      <form>
        <input
          style={{ width: 400, margin: "7% auto 15px" }}
          className="form-control"
          type="text"
          placeholder="Search for..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
