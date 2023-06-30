import React from "react";

function Search({setSearchTerm}) {
let search;

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    setSearchTerm(search)
  }

  function handleSearch(e) {
    search=e.target.value
  }
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleSearch}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
