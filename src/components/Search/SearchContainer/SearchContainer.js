import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useDebounce from "../../../customHooks/useDebounce";
import * as actions from "../../../store/actions/index";
import SearchInput from "../SearchInput/SearchInput";

const SearchContainer = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Redux dispatch hook for triggering actions
  const dispatch = useDispatch();

  // Redux state hooks to access redux movies state
  const movieSearchLoading = useSelector((state) => state.movies.loading);
  const movieSearchError = useSelector((state) => state.movies.error);
  const movies = useSelector((state) => state.movies.movies);

  // Redux state for nominations
  const nominationList = useSelector(
    (state) => state.nominations.nominationList
  );
  const nominationLoading = useSelector((state) => state.nominations.loading);
  const completedNominations = useSelector(
    (state) => state.nominations.completedNominations
  );

  // Custom hook to retrieve search term inputted after 400ms of no typing
  const debouncedSearchTerm = useDebounce(searchTerm, 400);

  // Handles movie results from API when search terms change
  useEffect(() => {
    if (!searchTerm) {
      return;
    }
    if (debouncedSearchTerm && searchTerm) {
      dispatch(actions.getMovies(searchTerm));
    }
  }, [debouncedSearchTerm, dispatch, searchTerm]);

  // Handles search input
  const handleSearch = (event) => {
    // if search input is empty, clear results
    if (!event.target.value) {
      dispatch(actions.clearMovies());
    }

    setSearchTerm(event.target.value);
  };

  let movieResults =
  movies &&
  movies.map((movie) => {
    return (
      <div key={movie.imdbID}>
        <span>{movie.Title}</span>
        <span>{movie.Year}</span>
        <span>{movie.Type}</span>
      </div>
    )
  });

  if (movieSearchLoading) {
    if (movieSearchLoading || nominationLoading) {
      movieResults = null; // want a loading animation
    } else {
      movieResults =
        movies &&
        movies.map((movie) => {
          return (
            <div key={movie.imdbID}>
              <span>{movie.Title}</span>
              <span>{movie.Year}</span>
              <span>{movie.Type}</span>
            </div>
          )
        });
    }
  }

  return (
    <React.Fragment>
      <SearchInput handleSearch={handleSearch} searchVal={searchTerm} />
      {movieResults}
    </React.Fragment>
  );
};

export default SearchContainer;
