import {loadMovies, requireAuthorization} from "./actions";
import {AuthorizationStatus} from "../../../guess-melody-6/src/const";

const transformMovie = (movie) => ({
  name: movie.name,
  posterImage: movie.poster_image,
  previewImage: movie.preview_image,
  backgroundImage: movie.background_image,
  backgroundColor: movie.background_color,
  description: movie.description,
  rating: movie.rating,
  scoresCount: movie.scores_count,
  director: movie.director,
  starring: movie.starring,
  runTime: movie.run_time,
  genre: movie.genre,
  released: movie.released,
  id: movie.id,
  isFavorite: movie.is_favorite,
  videoLink: movie.video_link,
  previewVideoLink: movie.preview_video_link
});

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => data.map((item) => transformMovie(item)))
    .then((data) => dispatch(loadMovies(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);
