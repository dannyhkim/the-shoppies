import React from "react";

const SearchInput = (props) => {
  return (
    <div>
      <input
        type="text"
        onChange={e => props.handleSearch(e)}
        value={props.searchVal}
        >
      </input>
    </div>
  );
};

export default SearchInput;
