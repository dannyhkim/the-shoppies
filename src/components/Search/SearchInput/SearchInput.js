import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import * as actions from "../../../store/actions/index";

const MOVIE_API_URL = `https://www.omdbapi.com/?apikey=fddf39f1`;

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
