import React from "react";
import { MDBInput } from "mdb-react-ui-kit";
import classes from "./SearchInput.module.css";

const SearchInput = (props) => {
  return (
    <div className={classes.search_container}>
      <MDBInput
        type="text"
        size="lg"
        label="Search for movies"
        value={props.searchVal}
        disabled={props.disable}
        onChange={(e) => props.handleSearch(e)}
      />
    </div>
  );
};

export default SearchInput;
