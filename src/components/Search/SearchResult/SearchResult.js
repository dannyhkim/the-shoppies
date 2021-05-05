import React, { Fragment } from "react";

const SearchResult = (props) => {
  return (
    <Fragment>
      <div>
        <h2>{props.title}</h2>
        <h3>
          {props.year} • {props.type}
        </h3>
      </div>
      <button>{!props.disabled ? "Nominate" : "Nominated"}</button>
    </Fragment>
  );
};
export default SearchResult;
