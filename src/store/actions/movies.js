import * as actionTypes from "./actionTypes";
import axios from "axios";

export const getMovies = (searchInput) => {
  return (dispatch) => {
    // first, dispatch immediate synchronous action to store to indicate you've started fetching the movie data
    dispatch(getMoviesStarted());

    // OMDB Movie API URL
    const OMDB_API_URL = `https://www.omdbapi.com/?s=${searchInput}&apikey=fddf39f1`;

    axios
      .get(OMDB_API_URL)
      .then((res) => {
        const response = res.data;

        if (response.Response) {
          dispatch(getMoviesSuccess(response.Search));
        }
        if (response.Error) {
          dispatch(getMoviesFailure(response.Error));
        }
      })
      .catch((err) => {
        dispatch(getMoviesFailure(err));
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
