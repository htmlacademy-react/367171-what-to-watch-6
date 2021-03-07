import {loadMovies, requireAuthorization} from "./actions";
import {AuthorizationStatus} from "../../../guess-melody-6/src/const";

const transformMovie = (movie) => ({
  posterImage: movie.poster_image,
  previewImage: movie.preview_image,
  backgroundImage: movie.background_image,
  backgroundColor: movie.background_color,
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
