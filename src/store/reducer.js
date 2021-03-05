import {movieItems} from "../mocks/movie-items";
import {getGenresItems} from "../components/utils/utils";
import {ActionType} from "./actions";

export const initialState = {
  movies: movieItems,
  currentGenre: `All genres`,
  genresItems: getGenresItems(movieItems)
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER:
      return {
        ...state,
        currentGenre: action.payload,
        movies: state.movies.filter(({genre}) => action.payload === `All genres` ? genre : genre === action.payload)
      };
    case ActionType.RESET_FILTER:
      return {...initialState};
    default:
      return state;
  }
};

export {reducer};
