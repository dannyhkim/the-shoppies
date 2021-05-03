import * as actionTypes from "./actionTypes";
import axios from "axios";

export const getMovies = (searchInput) => {
  return (dispatch) => {
    // first, dispatch immediate synchronous action to store to indicate you've started fetching the movie data
    dispatch(getMoviesStarted());

    return new Promise((resolve, reject) => {
      // GET request for movies
      axios
        .get(`https://www.omdbapi.com/?s=${searchInput}&apikey=fddf39f1`)
        .then((response) => response.json())
        .then((jsonResponse) => {
          if (jsonResponse.Response === "True") {
            dispatch(getMoviesSuccess(jsonResponse.Search))
            // setLoading(false);
          } else {
            dispatch(getMoviesFailure(jsonResponse.Error));
            // setLoading(false);
          }
        })
    });
  };
};

const getMoviesStarted = () => {
  return {
    type: actionTypes.GET_MOVIES_STARTED,
  };
};

const getMoviesSuccess = (movies) => {
  return {
    type: actionTypes.GET_MOVIES_SUCCESS,
    movies: movies,
  };
};

const getMoviesFailure = (error) => {
  return {
    type: actionTypes.GET_MOVIES_FAILURE,
    error: error,
  };
};
