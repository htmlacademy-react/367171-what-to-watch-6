import {movieItems} from "../mocks/movie-items";

export const initialState = {
  movies: movieItems,
  genres: `All genres`
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_FILTER`:
      return {
        ...state,
        genres: action.payload
      };
    default:
      return state;
  }
  return state;
};


export {reducer};
