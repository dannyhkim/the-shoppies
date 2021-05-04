import * as actionTypes from "../actions/actionTypes";

const initialState = {
  nominationList: [],
  loading: false,
  error: null,
  completedNominations: false,
};

const addNominationStarted = (state, action) => {
  return {
    ...state,
    loading: true,
  };
};

const addNominationSuccess = (state, action) => {
  // check if movie is already nominated before adding to list
  const alreadyNominated = state.nominationList.find(
    (movie) => movie.Title === action.movie.Title
  );

  const updatedList = alreadyNominated
    ? state.nominationList
    : state.nominationList.concat(action.movie);

  return {
    ...state,
    loading: false,
    error: null,
    nominationList: updatedList,
  };
};

const addNominationFailure = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error,
  };
};

const removeNomination = (state, action) => {
  // filter for movies not equal to the title of movie being removed
  const updatedList = state.nominationList.filter(
    (movie) => movie.Title !== action.movieTitle
  );
  return {
    ...state,
    nominationList: updatedList,
    completedNominations: false,
  };
};

const completedNominations = (state, action) => {
  return {
    ...state,
    completedNominations: true,
  };
};

const clearNominations = (state, action) => {
  return {
    ...state,
    nominationList: [], // set nominations list empty
    completedNominations: false,
  };
};

const saveNominations = (state, action) => {
  return {
    ...state,
    nominationList: action.localStorage,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NOMINATION_STARTED:
      return addNominationStarted(state, action);
    case actionTypes.ADD_NOMINATION_SUCCESS:
      return addNominationSuccess(state, action);
    case actionTypes.ADD_NOMINATION_FAILURE:
      return addNominationFailure(state, action);
    case actionTypes.REMOVE_NOMINATION:
      return removeNomination(state, action);
    case actionTypes.COMPLETED_NOMINATIONS:
      return completedNominations(state, action);
    case actionTypes.CLEAR_NOMINATIONS:
      return clearNominations(state, action);
    case actionTypes.SAVE_NOMINATIONS:
      return saveNominations(state, action);
    default:
      return state;
  }
};

export default reducer;
