import React from "react";

const Search = ({ handleSearchInput, searchTerm }) => {
  return (
    <>
      <h1 className="app-name">Book Finder</h1>
      <form className="search-form">
        <input
          className="search-input"
          type="text"
          value={searchTerm}
          name="searchTerm"
          placeholder="Book "
          onChange={handleSearchInput}
        />
        <button className="search-button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Search;
