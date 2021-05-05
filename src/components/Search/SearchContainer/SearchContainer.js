import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useDebounce from "../../../customHooks/useDebounce";
import * as actions from "../../../store/actions/index";
import SearchInput from "../SearchInput/SearchInput";
import SearchResult from '../SearchResult/SearchResult';

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

  // Handles search input
  const handleSearch = (event) => {
    // if search input is empty, clear results
    if (!event.target.value) {
      dispatch(actions.clearMovies());
    }

    setSearchTerm(event.target.value);
  };

  // Handles nominations of movies
  const handleNomination = (title, year) => {
    dispatch(actions.addNomination(title, year));
  }

  // Handles movie results from API when search terms change
  useEffect(() => {
    if (!searchTerm) {
      return;
    }
    if (debouncedSearchTerm && searchTerm) {
      dispatch(actions.getMovies(searchTerm));
    }
  }, [debouncedSearchTerm, dispatch, searchTerm]);

  // Movies from search input
  let movieResults = null;

  if (movieSearchLoading || nominationLoading) {
    movieResults = null; // want a loading animation
  } else {
    movieResults =
      movies &&
      movies.map((movie) => {

        // check if movie has already been nominated
        const isNominated = nominationList.find(nomination => nomination.Title === movie.Title);

        return (
          <SearchResult
            key={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            type={movie.Type}
            disable={isNominated}
            handleClick={() => handleNomination(movie.Title, movie.Year)}
          />
        );
      });
  }

  return (
    <React.Fragment>
      <SearchInput handleSearch={handleSearch} searchVal={searchTerm} />
      {movieResults}
    </React.Fragment>
  );
};

export default SearchContainer;
