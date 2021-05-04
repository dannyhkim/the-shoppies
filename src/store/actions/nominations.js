import * as actionTypes from "./actionTypes";
import axios from "axios";

// Using redux thunk for async API query of movie to be added to nominations list
export const addNomination = (movieTitle, movieYear) => {
  return (dispatch) => {
    dispatch(addNominationStarted());

    const OMDB_API_URL = `https://www.omdbapi.com/?t=${movieTitle}&y=${movieYear}&apikey=fddf39f1`;

    axios
      .get(OMDB_API_URL)
      .then((res) => {
        const response = res.data;
        dispatch(addNominationSuccess(response));
      })
      .catch((err) => {
        dispatch(addNominationFailure(err));
      });
  };
};

const addNominationStarted = () => {
  return {
    type: actionTypes.ADD_NOMINATION_STARTED,
  };
};

const addNominationSuccess = (movie) => {
  return {
    type: actionTypes.ADD_NOMINATION_SUCCESS,
    movie: movie,
  };
};

const addNominationFailure = (error) => {
  return {
    type: actionTypes.ADD_NOMINATION_FAILURE,
    error: error,
  };
};

export const removeNomination = (movieTitle) => {
  return {
    type: actionTypes.REMOVE_NOMINATION,
    movieTitle: movieTitle,
  };
};

export const completedNominations = () => {
  return {
    type: actionTypes.COMPLETED_NOMINATIONS,
  };
};

export const clearNominations = () => {
  return {
    type: actionTypes.CLEAR_NOMINATIONS,
  };
};

export const saveNominations = (localStorage) => {
  return {
    type: actionTypes.SAVE_NOMINATIONS,
    localStorage: localStorage,
  };
};
