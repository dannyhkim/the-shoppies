import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  movies: [],
  error: null,
};

const getMoviesStarted = (state, action) => {
  return {
    ...state,
    loading: true,
    error: null,
  };
};

const getMoviesSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    movies: action.movies,
    error: null,
  };
};

const getMoviesFailure = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: false,
  };
};

// clears movie results when search input is empty
const clearMovies = (state, action) => {
  return {
    ...state,
    loading: false,
    error: null,
    movies: []
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MOVIES_STARTED:
      return getMoviesStarted(state, action);
    case actionTypes.GET_MOVIES_SUCCESS:
      return getMoviesSuccess(state, action);
    case actionTypes.GET_MOVIES_FAILURE:
      return getMoviesFailure(state, action);
    case actionTypes.CLEAR_MOVIES:
      return clearMovies(state, action);
    default:
      return state;
  }
};

export default reducer;
