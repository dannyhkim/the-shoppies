import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  movies: null,
  error: null,
};

const getMoviesStarted = (state, action) => {
  return {
    ...state,
    loading: true,
  };
};

const getMoviesSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    movies: action.movies,
  };
};

const getMoviesFailure = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: false,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MOVIES_STARTED:
      return getMoviesStarted(state, action);
    case actionTypes.GET_MOVIES_SUCCESS:
      return getMoviesSuccess(state, action);
    case actionTypes.GET_MOVIES_FAILURE:
      return getMoviesFailure(state, action);
    default:
      return state;
  }
};

export default reducer;
