import React from "react";

const SearchInput = (props) => {
  return (
    <div>
      <input
        type="text"
        onChange={e => props.handleSearch(e)}
        value={props.searchVal}
        disabled={props.disable}
        >
      </input>
    </div>
  );
};

export default SearchInput;
