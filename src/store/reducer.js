import {ActionType} from "./actions";
import {AuthorizationStatus} from "../components/constants/auth";

export const initialState = {
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  movies: [],
  currentGenre: `All genres`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return {
        ...state,
        movies: action.payload,
        isDataLoaded: true
      };
    case ActionType.REQUIRED_AUTHORIZATION:
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
      return {...initialState};
    default:
      return state;
  }
};

export {reducer};
