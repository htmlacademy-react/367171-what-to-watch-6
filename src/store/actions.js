export const ActionType = {
  CHANGE_FILTER: `movies/changeFilter`,
  RESET_FILTER: `movies/resetFilter`,
  LOAD_MOVIES: `movies/loadMovies`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
};

export const changeGenre = (evt) => ({
  type: ActionType.CHANGE_FILTER,
  payload: evt.target.id,
});

export const resetFilter = () => ({
  type: ActionType.RESET_FILTER
});

export const loadMovies = (movies) => ({
  type: ActionType.LOAD_MOVIES,
  payload: movies
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});
