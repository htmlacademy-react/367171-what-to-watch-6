import {ActionType} from "./actions";
import {AuthorizationStatus} from "../components/constants/auth";
import {MOVIES_COUNT_PER_STEP} from "../components/constants/common";

export const initialState = {
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  movies: [],
  currentGenre: `All genres`,
  renderedMoviesCount: MOVIES_COUNT_PER_STEP
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return {
        ...state,
        movies: action.payload,
        isDataLoaded: true
      };
    case ActionType.SHOW_MORE:
      return {
        ...state,
        renderedMoviesCount: state.renderedMoviesCount + MOVIES_COUNT_PER_STEP
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOG_OUT:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.CHANGE_FILTER:
      return {
        ...state,
        currentGenre: action.payload
      };
    case ActionType.RESET_FILTER:
      return {
        ...state,
        currentGenre: `All genres`
      };
    default:
      return state;
  }
};

export {reducer};
