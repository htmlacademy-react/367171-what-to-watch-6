import {movieItems} from "../mocks/movie-items";
import {ActionFilterType} from "./actions";

const initialState = {
  movies: movieItems,
  genres: `All genres`
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return {
        genres: state
      };
    default:
      return state;
  }
  // switch (action.type) {
  //   case ActionFilterType.ALL_GENRES:
  //     return {
  //       ...state,
  //       movies,
  //     };
  //
  //   case ActionFilterType.ACTIVE_GENRE:
  //     return {
  //       ...state,
  //       movies: (movies) => movies.filter((movie) => movie.genre === state.genre)
  //     };
  // }
  return state;
};


export {reducer};
